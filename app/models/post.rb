class Post < ApplicationRecord
  has_rich_text :content
  belongs_to :post_category
end
