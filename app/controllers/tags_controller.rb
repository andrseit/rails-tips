# frozen_string_literal: true

class TagsController < ApplicationController
  def search_tag
    respond_to do |format|
      format.html {}
      format.json do
        @tags = if !params[:except].nil? && params[:except].include?('everything')
                  []
                else
                  Tag.ransack(name_cont: params[:q])
                     .result(distinct: true)
                     .where.not(name: params[:except])
                end
      end
    end
  end
end
