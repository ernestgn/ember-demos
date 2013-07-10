/**
    Phone book demo
    @project Phonebook
    @author Ernest Ngaruiya
 */

/*jslint nomen: true, browser: true*/
/*global Ember,DS,$*/

window.App = Ember.Application.create();

/*
    We need to implement the queryFixtures method. Otherwise, the didLoad
    event will not be triggered when the record array is loaded. When the
    didLoad event is triggered, we post-process the controller's content
    to insert contact section labels as well as contacts into an array.
 */
DS.CustomFixtureAdapter = DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures, query, type) {
        return fixtures.filter(function (item) {
            var property;
            for (property in query) {
                if(query.hasOwnProperty(property) && item[property] !== query[property]) {
                    return false;
                }
            }
            return true;
        });
    }
});

window.App.store = DS.Store.create({
    revision: 12,
    adapter: DS.CustomFixtureAdapter
});

window.App.Router.map(function () {
    this.resource("contacts");
    this.resource('contact', { path: '/contacts/:contact_id' });
});

window.App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('contacts');
    }
});

window.App.ContactsRoute = Ember.Route.extend({
    model: function () {
        return window.App.Contact.find({});
    }
});


window.App.ContactsController = Ember.ArrayController.extend(Ember.Evented, {
    sortProperties: ['name'],
    selectedSection: null,
    selectedChar: null,
    contactListItems: null,

    selectedContact: null,

    labels: {},

    callContact: function (context) {
        if (!context.get('isLabel')) {
            this.set('selectedContact', context);
            this.trigger('contactSelected');
        }
    },

    setupContactListItems:  Ember.observer(function () {
        var _this = this,
            index = 0,
            contact,
            c;
        this.set('contactListItems', Ember.A());
        // iterate over content and insert section labels
        this.get('arrangedContent').forEach(function (contact) {
                c = contact.get('name').charAt(0);
                if (_this.get('lastChar') !== c) {
                    _this.set('lastChar', c);
                    _this.get('labels')[c] = Ember.Object.create({
                        index: index,
                        name: c,
                        isLabel: true
                    });
                    _this.get('contactListItems').pushObject(_this.get('labels')[c]);
                    index += 1;
                }
                contact.set('index', index);
                _this.get('contactListItems').pushObject(contact);
                index += 1;
            });
    }).observes('content.isLoaded'),

    transitionToContact: function () {
        if (this.get('selectedContact')) {
            this.transitionToRoute('contact', this.get('selectedContact'));
        }
    },

    goToIndex: function(index, max_index){
        if (index >= 0 && index < max_index) {
            var c = index === 26 ? '#' : String.fromCharCode('A'.charCodeAt(0) + index);
            if (this.get('selectedChar') !== c || this.get('selectedChar') === null) {

                this.set('selectedChar', c);
                if (this.get('labels').hasOwnProperty(c)) {
                    this.set('selectedSection', this.get('labels')[c]);
                } else {
                    this.set('selectedSection', null);
                }
            }
        }
    }
});

window.App.ContactsListView = Ember.VirtualListView.extend({
    height: 670,
    width: 408,
    rowHeight: 85,
    elementWidth: 408,

    scrollToSection: Ember.observer(function () {
         var section =  this.get('controller').get('selectedSection'),
             height,
             index;
         if (section) {
             index = section.get('index');
             height = this.get('rowHeight');
             var top = index * height;
             this.scrollTo(top, true);
         }
     }).observes('controller.selectedSection')
});

window.App.ContactsView = Ember.View.extend({

    didInsertElement: function () {
        this.get('controller').on('contactSelected', $.proxy(this.transitionOut, this));
    },

    transitionOut: function () {
        try {
            var controller = this.get("controller");
            $('#header').addClass('fadeout');
            this.$('#contactsContainer').animate({
                top: 500,
                height: 0
            }, 300, 'linear', function () {
                controller.transitionToContact();
            });
        }
        catch (e) {} // if case the 'contactSelected' event is fired in an unexpected state, ignore
    }
});


window.App.LetterNavView = Ember.View.extend({
    pointerOffset: 5,
    mouseIsDown: false,
    charCount: 27, // alphabet  + #

    mouseDown: function (evt) {
        this.set('mouseIsDown', true);
        this.navigateToPos(evt.pageY);
        this.$('#pointer').show();
    },
    mouseMove: function (evt) {
        if (this.get('mouseIsDown')) {
            this.navigateToPos(evt.pageY);
        }
    },
    mouseUp: function () {
        this.set('mouseIsDown', false);
        this.$('#pointer').hide();
        this.get('controller').set('selectedChar', null);
    },

    touchStart: function (evt) {
        evt = evt.originalEvent || evt;
        this.set('mouseIsDown', true);
        this.navigateToPos(evt.pageY);
        this.$('#pointer').show();
    },

    touchMove: function (evt) {
        if (this.get('mouseIsDown')) {
            evt = evt.originalEvent || evt;
            this.navigateToPos(evt.pageY);
        }
    },

    touchEnd: function () {
        this.mouseUp();
    },


    navigateToPos: function (page_y) {
        var top = this.$('#letterNav').offset().top,
            offset_y = page_y - top,
            count = this.get('charCount'),
            p_offset = this.get('pointerOffset'),
            height = this.$('#letterNav').height(),
            index = Math.floor(offset_y / (height / count)),
            center = this.$('#pointer').height() / 2,
            pointer_top = page_y - center + p_offset,
            lower_bound = top - center + p_offset,
            upper_bound = top + height - center + p_offset;
        pointer_top = Math.max(lower_bound, Math.min(pointer_top, upper_bound));
        this.$('#pointer').css({top: pointer_top});
        this.get('controller').goToIndex(index, count);
    },

    setPointerOpacity: Ember.observer(function () {
        this.$('#pointer').css(
            {opacity: this.get('controller').get('selectedSection')? 1 : 0.3});
    }).observes('controller.selectedSection')
});

window.App.ContactView = Ember.View.extend({
   didInsertElement: function () {
      $('#contactPhoto').css({opacity: 1});
   }
});
