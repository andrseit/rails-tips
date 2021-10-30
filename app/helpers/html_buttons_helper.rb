module HtmlButtonsHelper
  def link_danger_button(text, url, html_options = {})
    color_classes = 'bg-red-700 text-white hover:bg-red-600'
    layout_classes = 'rounded  px-3 py-2'
    font_classes = 'font-semibold'
    html_options[:class] = [color_classes, layout_classes, font_classes].join(' ')
    render_link text, url, html_options
  end

  def link_warning_button(text, url, html_options = {})
    color_classes = 'bg-yellow-700 text-white hover:bg-yellow-600'
    layout_classes = 'rounded  px-3 py-2'
    font_classes = 'font-semibold'
    html_options[:class] = [color_classes, layout_classes, font_classes].join(' ')
    render_link text, url, html_options
  end
end
