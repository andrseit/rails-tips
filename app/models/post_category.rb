class PostCategory < ApplicationRecord
  has_many :posts, dependent: :destroy

  def html_id
    name.downcase.gsub(' ', '_')
  end
end
