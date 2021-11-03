export default class TagHelper {
    constructor(id, label, existing, aIndex, postForm, tagContainer) {
        this.id = id
        this.label = label
        this.aIndex = aIndex
        this.postForm = postForm
        this.existing = !!existing
        this.tagContainer = tagContainer

        // initialize
        if (existing) {
            // find label
            this.tagLabel = existing
            // find input with value 1
            const inputEl = $(postForm).find(`input[value=${id}]`)
            this.input = inputEl
            // add button
            const xButtonEl = this._createRemoveButton()
            $(this.tagLabel).append(xButtonEl)
            this.xButtonEl = xButtonEl
        } else {
            this._appendHiddenInput()
            this._appendTagLabel()
        }
    }

    get index () {
        return this.aIndex
    }

    updateIndex (newIndex) {
        this.aIndex = newIndex
    }

    // removes hidden input and label
    removeLabel () {
        $(this.input).remove()
        $(this.tagLabel).remove()
    }

    _appendHiddenInput () {
        let tagInput = document.createElement('input')
        $(tagInput).attr('type', 'text')
        $(tagInput).attr('name', 'post[tag_ids][]')
        $(tagInput).attr('value', this.id)
        $(tagInput).attr('hidden', 'hidden')
        // TODO: remove line below this from here put it in constructor and separate create with append
        this.input = tagInput
        $(this.postForm).append(tagInput)
    }

    _appendTagLabel () {
        let tagLabel = document.createElement('span')
        $(tagLabel).text(this.label)
        $(tagLabel).data('id', this.id)
        $(tagLabel).addClass('rounded border-gray-500 border bg-gray-100 px-2 py-1 mr-2 h-8 inline-flex')

        // append button to tagLabel
        const xButtonEl = this._createRemoveButton()
        $(tagLabel).append(xButtonEl)
        this.xButtonEl = xButtonEl
        // TODO: remove line below this from here put it in constructor and separate create with append
        this.tagLabel = tagLabel
        $(this.tagContainer).append(tagLabel)
    }

    get xButton () {
        return this.xButtonEl
    }

    _removeHiddenInput () {

    }

    _removeTagLabel () {

    }

    _createRemoveButton () {
        let xButton = document.createElement('button')
        xButton = $(xButton)
        xButton.text('x')
        xButton.attr('type', 'button')
        xButton.addClass('ml-2')
        const obj = this
        xButton.on('click', function () {
            $(this).trigger('remove-label')
            obj.removeLabel()
        })
        return xButton
    }

}
