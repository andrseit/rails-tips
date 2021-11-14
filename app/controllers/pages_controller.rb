class PagesController < ApplicationController
  def index
    @search = Post.ransack(params[:q])
    @posts = @search.result
  end

  def search
    @tags = Tag.ransack(name_cont: params[:q]).result(distinct: true).map do |t|
      { text: t.name, link: posts_path(tag: t.id) }
    end
    @categories = PostCategory.ransack(name_cont: params[:q]).result(distinct: true).map do |c|
      { text: c.name, link: post_category_path(c)}
    end
    @title_posts = Post.ransack(title_cont: params[:q]).result(distinct: true).map do |p|
      { text: p.title, link: post_path(p) }
    end
    @content_posts = Post.ransack(content_body_cont: params[:q]).result(distinct: true).map do |p|
      { text: p.title, link: post_path(p) }
    end
  end
end
