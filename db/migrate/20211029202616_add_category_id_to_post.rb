class AddCategoryIdToPost < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :post_category_id, :integer
  end
end
