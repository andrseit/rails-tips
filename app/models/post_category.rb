class PostCategory < ApplicationRecord
  has_many :posts

  def html_id
    name.downcase.gsub(' ', '_')
  end
end
