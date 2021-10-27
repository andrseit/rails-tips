module ApplicationHelper

  def h1_header(content)
    render partial: 'shared/page_header', locals: { content: content }
  end

  def link_simple(text, url, html_options = {})
    html_options[:class] = 'text-blue-700 hover:underline font-normal'
    link_to text, url, html_options
  end

  def link_action_button(text, url, html_options = {})
    color_classes = 'bg-blue-700 text-white hover:bg-blue-600'
    layout_classes = 'rounded  px-3 py-3'
    font_classes = 'font-semibold'
    html_options[:class] = [color_classes, layout_classes, font_classes].join(' ')
    render_link text, url, html_options
  end

  def label_for(form, field)
    form.label field, class: 'text-lg font-medium mb-2'
  end

  private

  def render_link(text, url, html_options)
    link_to text, url, html_options
  end
end
