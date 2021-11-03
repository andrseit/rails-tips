class Post < ApplicationRecord
  has_rich_text :content
  belongs_to :post_category, optional: true
  has_many :post_tags
  has_many :tags, through: :post_tags
  accepts_nested_attributes_for :tags, reject_if: :all_blank, allow_destroy: true
end
