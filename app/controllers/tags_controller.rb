class TagsController < ApplicationController
  def search_tag
    respond_to do |format|
      format.html {}
      format.json {
        @tags = Tag.ransack(name_cont: params[:q])
                   .result(distinct: true)
                   .where.not(name: params[:except])
      }
    end
  end
end
