import TagHelper from './tagHelper'

let selectedTags = []

export default function () {
    const form = $('#post-form')
    const tagsContainer = $('#tags-container')

    _tag_search_listener(form, tagsContainer)
    _setUpExistingTagHelpers(form, tagsContainer)
}

// TODO: Extract global variables like form and tags container on top of this file
// TODO: Add x button to tags [OK]
// TODO: No more than 3 tags [OK]
// TODO: Do not allow the same tag 2 times [OK]
// TODO: When input for tag is focused and Enter is pressed select the input
// TODO: When tag not exists create the tag

function _tag_search_listener(form, tagsContainer) {
    const input = $('#tag-search')
    const options = {
        url: function (phrase) {
            return "/search_tag.json?q=" + phrase
        },
        getValue: "name",
        categories: [
            {
                listLocation: "tags",
            }
        ],
        list: {
            onChooseEvent: function() {
                if (selectedTags.length === 5) {
                    console.log('No more than 5 tags.')
                } else {
                    const id = input.getSelectedItemData().id
                    const name = input.getSelectedItemData().name
                    const existingIndex = selectedTags.findIndex(h => h.label === name)
                    if (existingIndex > -1) {
                        console.log('Already exists')
                    } else {
                        // create a new tag helper object
                        const tagHelper = new TagHelper(id, name, null, selectedTags.length, form, tagsContainer)
                        // add to selected tags
                        selectedTags.push(tagHelper)

                        $(tagHelper.xButton).on('remove-label', function () {
                            selectedTags.splice(tagHelper.index, 1)
                            _updateTagHelpersIndexes()
                        })
                    }
                }
            },
            onShowListEvent: function () {
                const listContainer = $('#eac-container-tag-search')
                listContainer.addClass('w-full mt-px border border-gray-800 rounded px-2 absolute bg-white')
            },
            onHideListEvent: function () {
                const listContainer = $('#eac-container-tag-search')
                listContainer.removeClass('w-full mt-px border border-gray-800 rounded px-2 absolute bg-white')
            }
        },
        cssClasses: ['relative mt-2']
    };
    input.easyAutocomplete(options)
}

// When there are already tags in the post
function _setUpExistingTagHelpers (form, tagsContainer) {
    const savedLabels = $('.saved-label')
    for (let i = 0; i < savedLabels.length; i++) {
        const currentLabel = $(savedLabels[i])
        const id = currentLabel.data('label_id')
        const name = currentLabel.text()
        const tagHelper = new TagHelper(id, name, currentLabel, selectedTags.length, form, tagsContainer)
        selectedTags.push(tagHelper)
    }
}

function _updateTagHelpersIndexes () {
    for (let i = 0; i < selectedTags.length; i++) {
        const tagHelper = selectedTags[i]
        tagHelper.updateIndex(i)
    }
}


