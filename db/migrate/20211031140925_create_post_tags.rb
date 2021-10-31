class CreatePostTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :name
    end

    create_table :post_tags do |t|
      t.integer :post_id
      t.integer :tag_id
    end
  end
end
