class Post < ApplicationRecord
  has_rich_text :content
  # the line below was added in order to search rich text with ransack (https://gorails.com/forum/how-do-i-search-action-text-with-ransack)
  has_one :content, class_name: 'ActionText::RichText', as: :record
  belongs_to :post_category, optional: true
  has_many :post_tags
  has_many :tags, through: :post_tags
  accepts_nested_attributes_for :tags, reject_if: :all_blank, allow_destroy: true
end
