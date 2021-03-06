import TagHelper from "./tagHelper";

// TODO: Add x button to tags [OK]
// TODO: No more than 3 tags [OK]
// TODO: Do not allow the same tag 2 times [OK]
// TODO: When input for tag is focused and Enter is pressed select the input
// TODO: When tag not exists create the tag
export default class AutocompleteHelper {

    ADD_TAGS_INPUT_MESSAGE = 'Click to add tags'
    LIMIT_REACHED_INPUT_MESSAGE = 'You cannot add more tags'


    constructor(form, tagsContainer) {
        this.selectedTags = []
        this.form = form
        this.tagsContainer = tagsContainer

        this.tagsInput = $(form).find('#tag-search')
    }

    createAutocomplete () {
        this.tagsInput.easyAutocomplete(this._exportOptions())
    }

    // When there are already tags in the post
    addSavedLabels (savedLabels) {
        for (let i = 0; i < savedLabels.length; i++) {
            const currentLabel = $(savedLabels[i])
            const id = currentLabel.data('label_id')
            const name = currentLabel.text()
            const tagHelper = new TagHelper(id, name, currentLabel, this.selectedTags.length, this.form, this.tagsContainer)
            this.selectedTags.push(tagHelper)
        }
    }

    _exportOptions () {
        const obj = this
        return {
            url: function (phrase) {
                return "/search_tag.json?q=" + phrase + obj._createExceptParam()
            },
            getValue: "name",
            categories: [
                {
                    listLocation: "tags",
                }
            ],
            list: {
                onChooseEvent: function () { obj._onChooseEventCallback(obj.tagsInput.getSelectedItemData()) },
                onShowListEvent: function () { obj._onShowListEvent() },
                onHideListEvent: function () { obj._onHideListEvent() }
            },
            cssClasses: ['relative mt-2']
        }
    }

    _onChooseEventCallback (selectedItem) {
        const obj = this
        const selectedTags = obj.selectedTags

        if (!this._reachedTagLimit()) {
            const id = selectedItem.id
            const name = selectedItem.name

            const tagHelper = new TagHelper(id, name, null, selectedTags.length, this.form, this.tagsContainer)
            selectedTags.push(tagHelper)

            $(tagHelper.xButton).on('remove-label', function () {
                selectedTags.splice(tagHelper.index, 1)
                obj._updateTagHelpersIndexes()
                if(obj.selectedTags.length < 5)
                    obj._enableInput()
            })

            if (this._reachedTagLimit())
                this._disableInput()

        }

        this._clearInput()
    }

    _onShowListEvent () {
        const listContainer = $('#eac-container-tag-search')
        listContainer.addClass('w-full mt-px border border-gray-800 rounded px-2 absolute bg-white')
    }

    _onHideListEvent () {
        const listContainer = $('#eac-container-tag-search')
        listContainer.removeClass('w-full mt-px border border-gray-800 rounded px-2 absolute bg-white')
    }

    _updateTagHelpersIndexes () {
        for (let i = 0; i < this.selectedTags.length; i++) {
            const tagHelper = this.selectedTags[i]
            tagHelper.updateIndex(i)
        }
    }

    _createExceptParam () {
        // find which tags to except
        const except = this.selectedTags.map(tag => tag.name)
        let queryParam = ''
        if (this.selectedTags.length < 5) {
            except.forEach(function (label) {
                queryParam += `&except[]=${label}`
            })
        } else {
            queryParam = '&except[]=everything'
        }
        return queryParam
    }

    _clearInput () {
        this.tagsInput.val('')
    }

    _disableInput () {
        this.tagsInput.attr('disabled', 'disabled')
        this.tagsInput.attr('placeholder', this.LIMIT_REACHED_INPUT_MESSAGE)
    }

    _enableInput () {
        this.tagsInput.removeAttr('disabled')
        this._resetPlaceholder()
    }

    _resetPlaceholder () {
        this.tagsInput.attr('placeholder', this.ADD_TAGS_INPUT_MESSAGE)
    }

    _reachedTagLimit () {
        return this.selectedTags.length === 5
    }

}