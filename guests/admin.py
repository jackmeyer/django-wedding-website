from django.contrib import admin
from django import forms
import json
import os
from .models import Guest, Party


def get_access_code_choices():
    data_dir = os.path.join(os.path.dirname(__file__), 'data')
    with open(os.path.join(data_dir, 'access_codes.json'), 'r') as f:
        codes = json.load(f)
    return [(c['access_code'], c['access_code']) for c in codes]


class PartyForm(forms.ModelForm):
    class Meta:
        model = Party
        fields = '__all__'

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['access_code'].choices = get_access_code_choices()


class GuestInline(admin.TabularInline):
    model = Guest
    fields = ('first_name', 'last_name', 'email', 'is_attending', 'meal')
    readonly_fields = ('first_name', 'last_name', 'email')


class PartyAdmin(admin.ModelAdmin):
    form = PartyForm
    list_display = ('name', 'access_code', 'type', 'category', 'rehearsal_dinner', 'invitation_opened',
                    'is_invited', 'is_attending')
    list_filter = ('type', 'category', 'is_invited', 'is_attending', 'rehearsal_dinner', 'invitation_opened')
    inlines = [GuestInline]


class GuestAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'party', 'email', 'is_attending', 'meal')
    list_filter = ('is_attending', 'is_child', 'meal', 'party__is_invited', 'party__category', 'party__rehearsal_dinner')


admin.site.register(Party, PartyAdmin)
admin.site.register(Guest, GuestAdmin)
