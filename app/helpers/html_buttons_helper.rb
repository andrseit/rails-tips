module HtmlButtonsHelper
  def link_action_button(text, url, html_options = {})
    link_generic_button text, url, 'blue', html_options
  end

  def link_danger_button(text, url, html_options = {})
    link_generic_button text, url, 'red', html_options
  end

  def link_warning_button(text, url, html_options = {})
    link_generic_button text, url, 'yellow', html_options
  end

  # TODO: Find how to add private methods in helpers
  # The user can set the color of the button.
  # Use above methods to render without thinking.
  # Use this method to render whatever color you like.
  def link_generic_button(text, url, color, html_options = {})
    color_classes = "bg-#{color}-700 text-white hover:bg-#{color}-600"
    layout_classes = 'rounded  px-3 py-2'
    font_classes = 'font-semibold'
    html_options[:class] = [color_classes, layout_classes, font_classes].join(' ')
    render_link text, url, html_options
  end
end
