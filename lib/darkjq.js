const calcStrArr = [
`$('body')
  .css('background')`,
`$('body')
  .css('color')`,


`$('a')
  .css('color')`,


`$('a:link, a:visited')
  .css('color')`,


`$('a:hover, a:active, a:focus')
  .css('color')`,


`$('hr')
  .css('border-bottom')`,
`$('hr')
  .css('border-top')`,


`$('h1, h2, h3, h4')
  .css('color')`,


`$('h1 a')
  .css('color')`,


`$('h1 a:active, h1 a:hover, h1 a:link, h1 a:visited')
  .css('color')`,


`$('.bordered')
  .css('border')`,


`$('.top_border')
  .css('border-top')`,


`$('.bottom_border')
  .css('border-bottom')`,


`$('.left_border')
  .css('border-left')`,


`$('.right_border')
  .css('border-right')`,


`$('.bullet')
  .css('color')`,


`$('.alert')
  .css('background-color')`,
`$('.alert')
  .css('border-color')`,
`$('.alert')
  .css('color')`,
`$('.alert')
  .css('text-shadow')`,


`$('.alert h4')
  .css('color')`,


`$('.alert-info')
  .css('background-color')`,
`$('.alert-info')
  .css('border-color')`,
`$('.alert-info')
  .css('color')`,


`$('.alert-info h4')
  .css('color')`,


`$('::-webkit-scrollbar-track')
  .css('background')`,
`$('::-webkit-scrollbar-track')
  .css('border-left-color')`,
`$('::-webkit-scrollbar-track')
  .css('border-right-color')`,
`$('::-webkit-scrollbar-track')
  .css('color')`,


`$('::-webkit-scrollbar-thumb')
  .css('background')`,
`$('::-webkit-scrollbar-thumb')
  .css('border-left-color')`,
`$('::-webkit-scrollbar-thumb')
  .css('border-right-color')`,
`$('::-webkit-scrollbar-thumb')
  .css('color')`,


`$('::-webkit-scrollbar-corner')
  .css('background')`,


`$('.supports_custom_scrollbar #messages_container::after')
  .css('background')`,


`$('.monkey_scroll_bar')
  .css('background')`,


`$('.monkey_scroll_handle_inner')
  .css('background')`,
`$('.monkey_scroll_handle_inner')
  .css('border')`,


`$('.monkey_scroll_bar_native_scrollbar_shim')
  .css('background')`,


`$('#client-ui .monkey_scroll_bar')
  .css('background')`,


`$('#client-ui .monkey_scroll_handle_inner')
  .css('background')`,
`$('#client-ui .monkey_scroll_handle_inner')
  .css('border')`,


`$('.c-scrollbar--monkey .c-scrollbar__track')
  .css('background')`,


`$('.c-scrollbar--monkey .c-scrollbar__bar')
  .css('background')`,
`$('.c-scrollbar--monkey .c-scrollbar__bar')
  .css('box-shadow')`,


`$('.client_channels_list_container')
  .css('background-color')`,
`$('.client_channels_list_container')
  .css('border-right-color')`,


`$('#col_channels')
  .css('color')`,


`$('.p-channel_sidebar')
  .css('background-color')`,
`$('.p-channel_sidebar')
  .css('color')`,


`$('.p-channel_sidebar__channel, .p-channel_sidebar__channel:link, .p-channel_sidebar__channel:visited, .p-channel_sidebar__channel:hover, .p-channel_sidebar__link, .p-channel_sidebar__link:link, .p-channel_sidebar__link:visited, .p-channel_sidebar__link:hover')
  .css('color')`,


`$('.p-channel_sidebar__channel--selected, .p-channel_sidebar__channel--selected:link, .p-channel_sidebar__channel--selected:visited, .p-channel_sidebar__channel--selected:hover, .p-channel_sidebar__link--selected, .p-channel_sidebar__link--selected:link, .p-channel_sidebar__link--selected:visited, .p-channel_sidebar__link--selected:hover')
  .css('color')`,


`$('.p-channel_sidebar__channel:hover, .p-channel_sidebar__link:hover')
  .css('background')`,


`$('.p-channel_sidebar__header')
  .css('color')`,


`$('.p-channel_sidebar__channel--im.p-channel_sidebar__channel--selected .c-presence, .p-channel_sidebar__channel--im-slackbot.p-channel_sidebar__channel--selected::before')
  .css('color')`,


`$('.p-channel_sidebar__channel--im .c-presence--away')
  .css('color')`,


`$('.p-channel_sidebar__channel--selected, .p-channel_sidebar__link--selected')
  .css('background')`,


`$('.p-channel_sidebar__channel--selected:hover, .p-channel_sidebar__link--selected:hover')
  .css('background')`,


`$('.p-channel_sidebar__channel--selected::before, .p-channel_sidebar__channel--selected:hover::before, .p-channel_sidebar__channel--selected::after, .p-channel_sidebar__channel--selected:hover::after')
  .css('color')`,


`$('.p-channel_sidebar__link--selected::before, .p-channel_sidebar__link--selected::after')
  .css('color')`,


`$('.p-channel_sidebar__badge, .p-channel_sidebar__banner--mentions')
  .css('background')`,


`$('.p-channel_sidebar .c-custom_scrollbar__thumb_vertical, .p-channel_sidebar .c-scrollbar__bar')
  .css('background')`,


`$('.p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted):not(.p-channel_sidebar__channel--selected) .p-channel_sidebar__name, .p-channel_sidebar__link--unread .p-channel_sidebar__name, .p-channel_sidebar__link--invites:not(.p-channel_sidebar__link--dim) .p-channel_sidebar__name, .p-channel_sidebar__section_heading_label--clickable:hover, .p-channel_sidebar__quickswitcher:hover')
  .css('color')`,


`$('.p-channel_sidebar__close_container:hover')
  .css('background')`,


`$('.channels_list_holder h2')
  .css('color')`,


`$('.channels_list_holder h2.hoverable:not(.jquery_hover):hover')
  .css('color')`,
`$('.channels_list_holder h2.hoverable:not(.jquery_hover):hover')
  .css('opacity')`,


`$('.channels_list_holder ul')
  .css('color')`,


`$('.channels_list_holder ul li')
  .css('text-shadow')`,


`$('.channels_list_holder ul li .channel_name, .channels_list_holder ul li .group_name, .channels_list_holder ul li .im_name, .channels_list_holder ul li .mpim_name, .channels_list_holder ul li>a')
  .css('background')`,
`$('.channels_list_holder ul li .channel_name, .channels_list_holder ul li .group_name, .channels_list_holder ul li .im_name, .channels_list_holder ul li .mpim_name, .channels_list_holder ul li>a')
  .css('color')`,


`$('.channels_list_holder ul li .channel_name:hover, .channels_list_holder ul li .group_name:hover, .channels_list_holder ul li .im_name:hover, .channels_list_holder ul li .mpim_name:hover, .channels_list_holder ul li>a:hover')
  .css('background')`,
`$('.channels_list_holder ul li .channel_name:hover, .channels_list_holder ul li .group_name:hover, .channels_list_holder ul li .im_name:hover, .channels_list_holder ul li .mpim_name:hover, .channels_list_holder ul li>a:hover')
  .css('border-bottom-right-radius')`,
`$('.channels_list_holder ul li .channel_name:hover, .channels_list_holder ul li .group_name:hover, .channels_list_holder ul li .im_name:hover, .channels_list_holder ul li .mpim_name:hover, .channels_list_holder ul li>a:hover')
  .css('border-top-right-radius')`,


`$('.channels_list_holder ul li .primary_action.im_name:hover .im_name_background, .channels_list_holder ul li .primary_action.feature_user_custom_status:hover .im_name_background, .channels_list_holder ul li .primary_action:not(.feature_user_custom_status):hover')
  .css('background')`,


`$('.channels_list_holder ul li.mention a')
  .css('color')`,


`$('.channels_list_holder ul li.unread:not(.muted_channel) .primary_action')
  .css('color')`,


`$('.channels_list_holder ul li.unread .prefix')
  .css('color')`,
`$('.channels_list_holder ul li.unread .prefix')
  .css('opacity')`,


`$('.channels_list_holder .group_close, .channels_list_holder .im_close, .channels_list_holder .mpim_close')
  .css('color')`,


`$('.channels_list_holder .unread_highlights')
  .css('background')`,
`$('.channels_list_holder .unread_highlights')
  .css('color')`,
`$('.channels_list_holder .unread_highlights')
  .css('text-shadow')`,


`$('.channels_list_holder .unread_msgs')
  .css('background')`,
`$('.channels_list_holder .unread_msgs')
  .css('color')`,


`$('#channel_list_invites_link')
  .css('border-bottom')`,
`$('#channel_list_invites_link')
  .css('color')`,
`$('#channel_list_invites_link')
  .css('font-size')`,


`$('#channel_list_invites_link:hover')
  .css('border-bottom')`,


`$('#quick_switcher_btn')
  .css('background')`,
`$('#quick_switcher_btn')
  .css('border-top')`,


`$('#quick_switcher_btn>i')
  .css('color')`,


`$('#quick_switcher_btn:active, #quick_switcher_btn:hover')
  .css('background')`,
`$('#quick_switcher_btn:active, #quick_switcher_btn:hover')
  .css('border-color')`,


`$('#quick_switcher_btn:active>i, #quick_switcher_btn:hover>i')
  .css('color')`,


`$('#quick_switcher_btn:active #quick_switcher_label, #quick_switcher_btn:hover #quick_switcher_label')
  .css('color')`,


`$('#quick_switcher_label')
  .css('color')`,


`$('.loading #loading-zone')
  .css('background')`,


`$('#loading_welcome')
  .css('background-image')`,


`$('#loading_message p')
  .css('color')`,


`$('#loading_message #loading_message_attribution')
  .css('color')`,


`$('#loading_team_menu_bg, #loading_user_menu_bg')
  .css('background')`,
`$('#loading_team_menu_bg, #loading_user_menu_bg')
  .css('border')`,


`$('.infinite_spinner_bg, .infinite_spinner_blue')
  .css('stroke')`,


`$('body.loading #team_menu, body.loading #quick_switcher_btn, body.loading #team_menu_overlay, body.loading #col_channels_overlay, body.loading #col_channels')
  .css('background-color')`,


`$('input[type=text], input[type=password], input[type=datetime], input[type=datetime-local], input[type=date], input[type=month], input[type=time], input[type=week], input[type=number], input[type=email], input[type='url'], input[type=tel], input[type=color], input[type=search]')
  .css('background-color')`,
`$('input[type=text], input[type=password], input[type=datetime], input[type=datetime-local], input[type=date], input[type=month], input[type=time], input[type=week], input[type=number], input[type=email], input[type='url'], input[type=tel], input[type=color], input[type=search]')
  .css('border-color')`,
`$('input[type=text], input[type=password], input[type=datetime], input[type=datetime-local], input[type=date], input[type=month], input[type=time], input[type=week], input[type=number], input[type=email], input[type='url'], input[type=tel], input[type=color], input[type=search]')
  .css('color')`,


`$('input[type=text]:focus, input[type=password]:focus, input[type=datetime]:focus, input[type=datetime-local]:focus, input[type=date]:focus, input[type=month]:focus, input[type=time]:focus, input[type=week]:focus, input[type=number]:focus, input[type=email]:focus, input[type='url']:focus, input[type=tel]:focus, input[type=color]:focus, input[type=search]:focus')
  .css('border-color')`,
`$('input[type=text]:focus, input[type=password]:focus, input[type=datetime]:focus, input[type=datetime-local]:focus, input[type=date]:focus, input[type=month]:focus, input[type=time]:focus, input[type=week]:focus, input[type=number]:focus, input[type=email]:focus, input[type='url']:focus, input[type=tel]:focus, input[type=color]:focus, input[type=search]:focus')
  .css('box-shadow')`,


`$('input[type=file]:focus')
  .css('outline')`,


`$('input[type=radio]:focus, input[type=checkbox]:focus')
  .css('outline')`,


`$('select')
  .css('background')`,


`$('select, textarea')
  .css('border')`,
`$('select, textarea')
  .css('color')`,


`$('select:active, select:focus, textarea:active, textarea:focus')
  .css('border-color')`,
`$('select:active, select:focus, textarea:active, textarea:focus')
  .css('box-shadow')`,


`$('input:disabled, input:disabled:active, select:disabled, textarea:disabled')
  .css('border-color')`,


`$('.no_touch input:hover, .no_touch select:hover, .no_touch textarea:hover')
  .css('border-color')`,


`$('.no_touch label.select:hover select')
  .css('border-color')`,


`$('.no_touch label.select:not(.disabled):hover::after')
  .css('color')`,


`$('label.disabled')
  .css('color')`,


`$('legend')
  .css('border-bottom')`,


`$('legend small')
  .css('color')`,


`$('.uneditable-input, .uneditable-textarea')
  .css('background-color')`,
`$('.uneditable-input, .uneditable-textarea')
  .css('border')`,
`$('.uneditable-input, .uneditable-textarea')
  .css('color')`,


`$('.uneditable-input:focus, .uneditable-textarea:focus')
  .css('border-color')`,
`$('.uneditable-input:focus, .uneditable-textarea:focus')
  .css('box-shadow')`,


`$('textarea')
  .css('background-color')`,
`$('textarea')
  .css('border')`,
`$('textarea')
  .css('color')`,


`$('textarea:focus')
  .css('border-color')`,
`$('textarea:focus')
  .css('box-shadow')`,


`$('::-webkit-input-placeholder')
  .css('color')`,
`$('::-webkit-input-placeholder')
  .css('-webkit-filter')`,
`$('::-webkit-input-placeholder')
  .css('filter')`,
`$('::-webkit-input-placeholder')
  .css('opacity')`,


`$('::-moz-placeholder')
  .css('color')`,
`$('::-moz-placeholder')
  .css('filter')`,
`$('::-moz-placeholder')
  .css('opacity')`,


`$('::placeholder')
  .css('color')`,
`$('::placeholder')
  .css('filter')`,
`$('::placeholder')
  .css('opacity')`,


`$('[data-placeholder]:empty::before')
  .css('color')`,


`$('input::-webkit-input-placeholder, textarea::-webkit-input-placeholder')
  .css('color')`,
`$('input::-webkit-input-placeholder, textarea::-webkit-input-placeholder')
  .css('-webkit-filter')`,
`$('input::-webkit-input-placeholder, textarea::-webkit-input-placeholder')
  .css('filter')`,
`$('input::-webkit-input-placeholder, textarea::-webkit-input-placeholder')
  .css('opacity')`,


`$('input::-moz-placeholder, textarea::-moz-placeholder')
  .css('color')`,
`$('input::-moz-placeholder, textarea::-moz-placeholder')
  .css('filter')`,
`$('input::-moz-placeholder, textarea::-moz-placeholder')
  .css('opacity')`,


`$('input::placeholder, textarea::placeholder')
  .css('color')`,
`$('input::placeholder, textarea::placeholder')
  .css('filter')`,
`$('input::placeholder, textarea::placeholder')
  .css('opacity')`,


`$('input[data-placeholder]:empty::before, textarea[data-placeholder]:empty::before')
  .css('color')`,


`$('input[disabled], input[readonly], textarea[disabled], textarea[readonly]')
  .css('background-color')`,


`$('.form-actions')
  .css('background-color')`,
`$('.form-actions')
  .css('border-top')`,


`$('.help-block, .help-inline')
  .css('color')`,


`$('.input-append .add-on, .input-prepend .add-on')
  .css('background-color')`,
`$('.input-append .add-on, .input-prepend .add-on')
  .css('border')`,
`$('.input-append .add-on, .input-prepend .add-on')
  .css('text-shadow')`,


`$('.btn')
  .css('background-color')`,
`$('.btn')
  .css('color')`,
`$('.btn')
  .css('text-shadow')`,


`$('.btn.hover, .btn:focus, .btn:hover, .btn.active, .btn:active')
  .css('background-color')`,
`$('.btn.hover, .btn:focus, .btn:hover, .btn.active, .btn:active')
  .css('color')`,


`$('.btn.btn_border')
  .css('border')`,


`$('.btn.disabled, .btn:disabled')
  .css('background-color')`,


`$('.btn.disabled:active, .btn.disabled:hover, .btn:disabled:active, .btn:disabled:hover')
  .css('background-color')`,


`$('.btn.btn_outline.btn_danger, .btn.btn_outline.btn_warning')
  .css('background-color')`,
`$('.btn.btn_outline.btn_danger, .btn.btn_outline.btn_warning')
  .css('color')`,


`$('.btn.btn_outline.btn_danger:focus, .btn.btn_outline.btn_danger:hover, .btn.btn_outline.btn_warning:focus, .btn.btn_outline.btn_warning:hover')
  .css('background-color')`,
`$('.btn.btn_outline.btn_danger:focus, .btn.btn_outline.btn_danger:hover, .btn.btn_outline.btn_warning:focus, .btn.btn_outline.btn_warning:hover')
  .css('border-color')`,
`$('.btn.btn_outline.btn_danger:focus, .btn.btn_outline.btn_danger:hover, .btn.btn_outline.btn_warning:focus, .btn.btn_outline.btn_warning:hover')
  .css('color')`,


`$('.btn.btn_outline.disabled')
  .css('background')`,
`$('.btn.btn_outline.disabled')
  .css('color')`,


`$('.btn.btn_outline.disabled:hover')
  .css('background')`,
`$('.btn.btn_outline.disabled:hover')
  .css('color')`,


`$('.btn.btn_attachment')
  .css('border-color')`,


`$('.btn.btn_attachment:hover, .btn.btn_attachment:focus')
  .css('background-color')`,
`$('.btn.btn_attachment:hover, .btn.btn_attachment:focus')
  .css('border-color')`,


`$('.btn.btn_attachment.btn_danger')
  .css('border-color')`,


`$('.btn.btn_attachment.btn_danger:hover, .btn.btn_attachment.btn_danger:focus')
  .css('border-color')`,


`$('.btn.btn_attachment.btn_primary')
  .css('border-color')`,


`$('.btn.btn_attachment.btn_primary:hover, .btn.btn_attachment.btn_primary:focus')
  .css('border-color')`,


`$('.btn_basic:focus, .btn_basic:hover')
  .css('color')`,


`$('.btn_outline')
  .css('background')`,
`$('.btn_outline')
  .css('color')`,


`$('.btn_outline::after')
  .css('border')`,


`$('.btn_outline.btn_transparent')
  .css('color')`,


`$('.btn_outline.btn_transparent::after')
  .css('border')`,


`$('.btn_outline.btn_transparent.active, .btn_outline.btn_transparent.hover, .btn_outline.btn_transparent:active, .btn_outline.btn_transparent:focus, .btn_outline.btn_transparent:hover')
  .css('background-color')`,
`$('.btn_outline.btn_transparent.active, .btn_outline.btn_transparent.hover, .btn_outline.btn_transparent:active, .btn_outline.btn_transparent:focus, .btn_outline.btn_transparent:hover')
  .css('color')`,


`$('.btn_outline.btn_transparent.active, .btn_outline.btn_transparent:active')
  .css('background-color')`,


`$('.btn_outline.hover, .btn_outline:focus, .btn_outline:hover')
  .css('background')`,
`$('.btn_outline.hover, .btn_outline:focus, .btn_outline:hover')
  .css('color')`,


`$('.btn_outline:active')
  .css('color')`,


`$('.btn_outline.active')
  .css('color')`,


`$('.btn_link')
  .css('color')`,


`$('.btn_link:hover, .btn_link:focus')
  .css('color')`,


`$('.btn-group.open .btn.dropdown-toggle')
  .css('background-color')`,


`$('.btn-group.open .btn-primary.dropdown-toggle')
  .css('background-color')`,


`$('.btn-group>.btn+.dropdown-toggle')
  .css('box-shadow')`,


`$('.btn_info, .btn.btn_success')
  .css('background-color')`,


`$('.btn_warning, .btn_danger')
  .css('background-color')`,


`$('.btn-danger .caret, .btn-info .caret, .btn-inverse .caret, .btn-primary .caret, .btn-success .caret, .btn-warning .caret')
  .css('border-bottom-color')`,
`$('.btn-danger .caret, .btn-info .caret, .btn-inverse .caret, .btn-primary .caret, .btn-success .caret, .btn-warning .caret')
  .css('border-top-color')`,


`$('.input_note')
  .css('color')`,


`$('.c-enhanced_text_input')
  .css('background-color')`,
`$('.c-enhanced_text_input')
  .css('border-color')`,
`$('.c-enhanced_text_input')
  .css('color')`,


`$('.c-enhanced_text_input:hover, .c-enhanced_text_input.c-enhanced_text_input--active')
  .css('border-color')`,


`$('.lazy_filter_select.disabled')
  .css('background')`,


`$('.lazy_filter_select.disabled input.lfs_input')
  .css('background')`,


`$('.lazy_filter_select .lfs_input_container')
  .css('background-color')`,
`$('.lazy_filter_select .lfs_input_container')
  .css('border-color')`,


`$('.lazy_filter_select .lfs_input_container.active, .lazy_filter_select .lfs_input_container:hover')
  .css('border-color')`,


`$('.lazy_filter_select .lfs_input_container.active')
  .css('box-shadow')`,


`$('.lazy_filter_select .lfs_list_container')
  .css('background')`,
`$('.lazy_filter_select .lfs_list_container')
  .css('border-color')`,
`$('.lazy_filter_select .lfs_list_container')
  .css('box-shadow')`,


`$('.lazy_filter_select .lfs_list .lfs_item.selected')
  .css('color')`,


`$('.lazy_filter_select .lfs_list .lfs_item.selected .c-member__current-status .prevent_copy_paste, .lazy_filter_select .lfs_list .lfs_item.selected .c-member__current-status--small::before, .lazy_filter_select .lfs_list .lfs_item.selected .c-member__display-name, .lazy_filter_select .lfs_list .lfs_item.selected .c-member__name, .lazy_filter_select .lfs_list .lfs_item.selected .c-member__secondary-name')
  .css('color')`,


`$('.lazy_filter_select .lfs_list .lfs_item.disabled')
  .css('color')`,


`$('.lazy_filter_select .lfs_list .lfs_item.active')
  .css('background-color')`,
`$('.lazy_filter_select .lfs_list .lfs_item.active')
  .css('border-color')`,
`$('.lazy_filter_select .lfs_list .lfs_item.active')
  .css('color')`,


`$('.lazy_filter_select .lfs_token')
  .css('background')`,
`$('.lazy_filter_select .lfs_token')
  .css('border')`,
`$('.lazy_filter_select .lfs_token')
  .css('color')`,


`$('.lazy_filter_select .lfs_token::after')
  .css('color')`,


`$('.lazy_filter_select.single .lfs_input_container.active::after, .lazy_filter_select.single .lfs_input_container:hover::after')
  .css('color')`,


`$('#select_share_channels .lazy_filter_select .lfs_value .lfs_item.selected')
  .css('color')`,


`$('#select_share_channels .lazy_filter_select .lfs_value .lfs_item.selected .ts_icon:not(.presence_icon)')
  .css('color')`,


`$('#select_share_channels .lazy_filter_select .lfs_item')
  .css('color')`,


`$('#select_share_channels .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon)')
  .css('color')`,


`$('#message_edit_form .emo_menu')
  .css('color')`,


`$('#message_edit_form .emo_menu.active .ts_icon_happy_smile, #message_edit_form .emo_menu:hover .ts_icon_happy_smile')
  .css('color')`,


`$('#message_edit_form.focus .emo_menu')
  .css('color')`,


`$('#message_edit_form.focus #primary_file_button:not(:hover)')
  .css('border-color')`,


`$('#message_edit_form.offline #message-input, #message_edit_form.offline #primary_file_button')
  .css('background-color')`,


`$('#message_edit_form.offline #primary_file_button')
  .css('border-color')`,
`$('#message_edit_form.offline #primary_file_button')
  .css('color')`,


`$('#msg_form.focus #msg_input, #msg_form.focus #primary_file_button:not(:hover):not(.active)')
  .css('border-color')`,


`$('#msg_form #msg_input')
  .css('background')`,
`$('#msg_form #msg_input')
  .css('border-color')`,
`$('#msg_form #msg_input')
  .css('border-left')`,
`$('#msg_form #msg_input')
  .css('color')`,


`$('#msg_form #msg_input.focus~.msg_mentions_button:not(.hover)')
  .css('color')`,


`$('#msg_form .msg_mentions_button')
  .css('color')`,


`$('#msg_form .msg_mentions_button:hover')
  .css('color')`,


`$('#msg_input')
  .css('background')`,
`$('#msg_input')
  .css('border-color')`,
`$('#msg_input')
  .css('color')`,


`$('#msg_input::-webkit-input-placeholder')
  .css('color')`,
`$('#msg_input::-webkit-input-placeholder')
  .css('-webkit-filter')`,
`$('#msg_input::-webkit-input-placeholder')
  .css('filter')`,
`$('#msg_input::-webkit-input-placeholder')
  .css('opacity')`,


`$('#msg_input::-moz-placeholder')
  .css('color')`,
`$('#msg_input::-moz-placeholder')
  .css('filter')`,
`$('#msg_input::-moz-placeholder')
  .css('opacity')`,


`$('#msg_input::placeholder')
  .css('color')`,
`$('#msg_input::placeholder')
  .css('filter')`,
`$('#msg_input::placeholder')
  .css('opacity')`,


`$('#msg_input[data-placeholder]:empty::before')
  .css('color')`,


`$('#msg_input:focus, #msg_input.focus')
  .css('border-color')`,


`$('#msg_input:focus+#primary_file_button:not(:hover):not(.active), #msg_input.focus+#primary_file_button:not(:hover):not(.active)')
  .css('border-color')`,


`$('#msg_input+#primary_file_button:not(:hover):not(.active)')
  .css('border-color')`,


`$('#msg_input+#primary_file_button.focus-ring:not(:hover):not(.active)')
  .css('border-color')`,


`$('#msg_input.offline:not(.pretend-to-be-online)')
  .css('background-color')`,
`$('#msg_input.offline:not(.pretend-to-be-online)')
  .css('color')`,


`$('#msg_input.disabled, #msg_input.ql-disabled')
  .css('background-color')`,
`$('#msg_input.disabled, #msg_input.ql-disabled')
  .css('border-color')`,
`$('#msg_input.disabled, #msg_input.ql-disabled')
  .css('color')`,


`$('#msg_input_message')
  .css('background-color')`,
`$('#msg_input_message')
  .css('color')`,


`$('#primary_file_button')
  .css('background')`,
`$('#primary_file_button')
  .css('border-color')`,
`$('#primary_file_button')
  .css('color')`,


`$('#primary_file_button.active, #primary_file_button.focus-ring, #primary_file_button:focus, #primary_file_button:hover')
  .css('background')`,
`$('#primary_file_button.active, #primary_file_button.focus-ring, #primary_file_button:focus, #primary_file_button:hover')
  .css('border-color')`,
`$('#primary_file_button.active, #primary_file_button.focus-ring, #primary_file_button:focus, #primary_file_button:hover')
  .css('color')`,


`$('#footer, #footer.footer_msg_input')
  .css('background')`,
`$('#footer, #footer.footer_msg_input')
  .css('box-shadow')`,


`$('#footer.disabled #message-input, #footer.disabled #msg_input')
  .css('background')`,
`$('#footer.disabled #message-input, #footer.disabled #msg_input')
  .css('border-color')`,


`$('#footer_archives_table')
  .css('color')`,


`$('#typing_text')
  .css('color')`,
`$('#typing_text')
  .css('filter')`,


`$('#notification_bar.wide #typing_text.overflow_ellipsis')
  .css('-webkit-filter')`,
`$('#notification_bar.wide #typing_text.overflow_ellipsis')
  .css('filter')`,


`$('#special_formatting_text')
  .css('color')`,


`$('#message_edit_container .message_input, .inline_message_input_container .message_input')
  .css('color')`,


`$('.inline_message_input_container .ql-container')
  .css('border-color')`,


`$('.inline_message_input_container .ql-container.focus, .inline_message_input_container .ql-container:active, .inline_message_input_container .ql-container:hover')
  .css('border-color')`,


`$('#message_edit_container .message_input')
  .css('background')`,
`$('#message_edit_container .message_input')
  .css('border-color')`,
`$('#message_edit_container .message_input')
  .css('color')`,


`$('#message_edit_container .message_input.focus')
  .css('border-color')`,
`$('#message_edit_container .message_input.focus')
  .css('box-shadow')`,


`$('.ql-editor::-webkit-scrollbar-thumb')
  .css('background-color')`,
`$('.ql-editor::-webkit-scrollbar-thumb')
  .css('color')`,


`$('.ql-editor::-webkit-scrollbar-thumb:hover')
  .css('background-color')`,


`$('.ql-placeholder')
  .css('color')`,
`$('.ql-placeholder')
  .css('filter')`,


`$('.ql-container.texty_single_line_input')
  .css('background')`,
`$('.ql-container.texty_single_line_input')
  .css('border')`,
`$('.ql-container.texty_single_line_input')
  .css('color')`,


`$('.ql-container.texty_single_line_input.focus, .ql-container.texty_single_line_input:hover')
  .css('border-color')`,
`$('.ql-container.texty_single_line_input.focus, .ql-container.texty_single_line_input:hover')
  .css('box-shadow')`,


`$('.ts_toggle .ts_toggle_button')
  .css('background')`,
`$('.ts_toggle .ts_toggle_button')
  .css('color')`,


`$('.ts_toggle .ts_toggle_button .ts_toggle_handle')
  .css('background')`,


`$('.ts_toggle .ts_toggle_secondary_label')
  .css('color')`,


`$('.ts_toggle.checked .ts_toggle_button')
  .css('background')`,
`$('.ts_toggle.checked .ts_toggle_button')
  .css('color')`,


`$('.ts_toggle.ts_toggle_orange .ts_toggle_button')
  .css('background')`,
`$('.ts_toggle.ts_toggle_orange .ts_toggle_button')
  .css('color')`,


`$('.menu')
  .css('background')`,
`$('.menu')
  .css('border')`,
`$('.menu')
  .css('box-shadow')`,
`$('.menu')
  .css('color')`,


`$('.menu .menu_content')
  .css('background')`,


`$('.menu .menu_filter_container')
  .css('background')`,


`$('.menu .menu_filter_container input.menu_filter')
  .css('border')`,


`$('.menu .menu_filter_container input.menu_filter:focus')
  .css('border-color')`,


`$('.menu .menu_filter_container .icon_search')
  .css('color')`,


`$('.menu .menu_filter_container .icon_close')
  .css('color')`,


`$('.menu #menu_header .menu_simple_header')
  .css('background')`,
`$('.menu #menu_header .menu_simple_header')
  .css('border-color')`,
`$('.menu #menu_header .menu_simple_header')
  .css('color')`,


`$('.menu #menu_header .menu_simple_header a')
  .css('color')`,


`$('.menu #menu_header .menu_simple_header a:hover')
  .css('color')`,


`$('.menu #menu_header .menu_close')
  .css('color')`,


`$('.menu .section_header .header_label')
  .css('background-color')`,
`$('.menu .section_header .header_label')
  .css('color')`,


`$('.menu .section_header>div.header_label_container')
  .css('color')`,


`$('.menu ul li a')
  .css('background')`,
`$('.menu ul li a')
  .css('border-bottom')`,
`$('.menu ul li a')
  .css('color')`,


`$('.menu ul li a.delete_link')
  .css('color')`,


`$('.menu ul li.highlighted a')
  .css('background')`,
`$('.menu ul li.highlighted a')
  .css('border-bottom-color')`,
`$('.menu ul li.highlighted a')
  .css('color')`,
`$('.menu ul li.highlighted a')
  .css('text-shadow')`,


`$('.menu ul li.highlighted a .menu_item_details, .menu ul li.highlighted a .prefix, .menu ul li.highlighted a i, .menu ul li.highlighted a ts-icon')
  .css('color')`,


`$('.menu ul li.highlighted a.delete_link')
  .css('color')`,


`$('.menu ul li.disabled a')
  .css('color')`,


`$('.menu ul li i')
  .css('color')`,


`$('.menu ul li.divider')
  .css('border-bottom-color')`,


`$('.menu ul li .menu_item_details')
  .css('color')`,


`$('.menu:not(.keyboard_active) ul li:hover:not(.disabled) a')
  .css('background')`,
`$('.menu:not(.keyboard_active) ul li:hover:not(.disabled) a')
  .css('border-bottom-color')`,
`$('.menu:not(.keyboard_active) ul li:hover:not(.disabled) a')
  .css('color')`,
`$('.menu:not(.keyboard_active) ul li:hover:not(.disabled) a')
  .css('text-shadow')`,


`$('.menu:not(.keyboard_active) ul li:hover:not(.disabled) a .menu_item_details, .menu:not(.keyboard_active) ul li:hover:not(.disabled) a .prefix, .menu:not(.keyboard_active) ul li:hover:not(.disabled) a i, .menu:not(.keyboard_active) ul li:hover:not(.disabled) a ts-icon')
  .css('color')`,


`$('.menu:not(.keyboard_active) ul li:hover:not(.disabled) a.delete_link')
  .css('color')`,


`$('.menu input')
  .css('background')`,
`$('.menu input')
  .css('border')`,


`$('.menu textarea')
  .css('background')`,
`$('.menu textarea')
  .css('border')`,


`$('.menu #menu_footer .menu_footer')
  .css('background')`,
`$('.menu #menu_footer .menu_footer')
  .css('border-top')`,


`$('.menu #monkey_scroll_wrapper_for_menu_items_scroller')
  .css('background')`,


`$('.menu #menu_list_container #menu_list .menu_list_item a')
  .css('color')`,


`$('.menu #menu_list_container #menu_list .menu_list_item.active a')
  .css('background')`,
`$('.menu #menu_list_container #menu_list .menu_list_item.active a')
  .css('color')`,
`$('.menu #menu_list_container #menu_list .menu_list_item.active a')
  .css('text-shadow')`,


`$('#autocomplete_menu')
  .css('color')`,


`$('#autocomplete_menu header')
  .css('background-color')`,


`$('#autocomplete_menu header .header_label')
  .css('color')`,


`$('#autocomplete_menu header hr')
  .css('border-bottom-color')`,
`$('#autocomplete_menu header hr')
  .css('border-top-color')`,


`$('#autocomplete_menu h2')
  .css('color')`,


`$('#autocomplete_menu .no_results')
  .css('color')`,


`$('#autocomplete_menu .keyword_match .modifier')
  .css('color')`,


`$('#autocomplete_menu .boxed')
  .css('background')`,
`$('#autocomplete_menu .boxed')
  .css('border')`,
`$('#autocomplete_menu .boxed')
  .css('box-shadow')`,


`$('#autocomplete_menu .pickmeup')
  .css('border-bottom')`,


`$('#autocomplete_menu.search_menu .section_header::before')
  .css('background-color')`,


`$('#autocomplete_menu.search_menu header')
  .css('color')`,


`$('#autocomplete_menu.search_menu header .header_label::before')
  .css('background-color')`,


`$('#autocomplete_menu.search_menu .query_header')
  .css('background-color')`,


`$('#autocomplete_menu.search_menu .query_header .search_query_preview')
  .css('color')`,


`$('#autocomplete_menu.search_menu li.highlighted .result_item_btn')
  .css('background')`,
`$('#autocomplete_menu.search_menu li.highlighted .result_item_btn')
  .css('color')`,
`$('#autocomplete_menu.search_menu li.highlighted .result_item_btn')
  .css('text-shadow')`,


`$('#autocomplete_menu.search_menu li.highlighted .modifier_icon')
  .css('color')`,


`$('#autocomplete_menu.search_menu li.highlighted .action_btn')
  .css('color')`,


`$('#autocomplete_menu.search_menu li.highlighted .delete_btn')
  .css('color')`,


`$('#autocomplete_menu.search_menu li.highlighted .delete_btn:focus, #autocomplete_menu.search_menu li.highlighted .delete_btn:hover')
  .css('color')`,


`$('#autocomplete_menu.search_menu li.highlighted .muted_text')
  .css('color')`,


`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .muted_text, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .muted_text')
  .css('color')`,


`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .result_item_btn, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .result_item_btn')
  .css('background')`,
`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .result_item_btn, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .result_item_btn')
  .css('color')`,
`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .result_item_btn, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .result_item_btn')
  .css('text-shadow')`,


`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .modifier_icon, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .modifier_icon')
  .css('color')`,


`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .action_btn, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .action_btn')
  .css('color')`,


`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn')
  .css('color')`,


`$('#autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn:focus, #autocomplete_menu.search_menu:not(.keyboard_active) li:focus .delete_btn:hover, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn:focus, #autocomplete_menu.search_menu:not(.keyboard_active) li:hover .delete_btn:hover')
  .css('color')`,


`$('#autocomplete_menu.search_menu .muted_text')
  .css('color')`,


`$('#autocomplete_menu.search_menu .time_modifiers::before')
  .css('background-color')`,


`$('#autocomplete_menu.search_menu .result_item_btn')
  .css('color')`,


`$('#autocomplete_menu.search_menu .action_btn, #autocomplete_menu.search_menu .modifier_icon')
  .css('color')`,


`$('#autocomplete_menu.search_menu footer .keyword::before, #autocomplete_menu.search_menu footer .modifier::before')
  .css('background')`,
`$('#autocomplete_menu.search_menu footer .keyword::before, #autocomplete_menu.search_menu footer .modifier::before')
  .css('border')`,
`$('#autocomplete_menu.search_menu footer .keyword::before, #autocomplete_menu.search_menu footer .modifier::before')
  .css('color')`,


`$('#autocomplete_menu.search_menu footer .selected .keyword::before, #autocomplete_menu.search_menu footer .selected .modifier::before')
  .css('background')`,
`$('#autocomplete_menu.search_menu footer .selected .keyword::before, #autocomplete_menu.search_menu footer .selected .modifier::before')
  .css('border')`,


`$('#autocomplete_menu.search_menu footer .modifier.incomplete::before')
  .css('background')`,
`$('#autocomplete_menu.search_menu footer .modifier.incomplete::before')
  .css('border')`,


`$('.search_light_grey')
  .css('color')`,


`$('.highlighter_underlay .keyword::before')
  .css('background')`,
`$('.highlighter_underlay .keyword::before')
  .css('border')`,
`$('.highlighter_underlay .keyword::before')
  .css('color')`,


`$('.highlighter_underlay .modifier::before')
  .css('background')`,
`$('.highlighter_underlay .modifier::before')
  .css('border')`,
`$('.highlighter_underlay .modifier::before')
  .css('color')`,


`$('.highlighter_underlay .modifier.incomplete::before')
  .css('background')`,
`$('.highlighter_underlay .modifier.incomplete::before')
  .css('border')`,


`$('.highlighter_underlay .selected .keyword::before, .highlighter_underlay .selected .modifier::before')
  .css('background')`,
`$('.highlighter_underlay .selected .keyword::before, .highlighter_underlay .selected .modifier::before')
  .css('border')`,


`$('.highlighter_underlay .ghost_text')
  .css('color')`,


`$('.pickmeup')
  .css('background')`,
`$('.pickmeup')
  .css('border')`,
`$('.pickmeup')
  .css('box-shadow')`,


`$('.pickmeup .pmu-instance .pmu-button')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-today.pmu-selected, .pickmeup .pmu-instance .pmu-today:hover')
  .css('background')`,


`$('.pickmeup .pmu-instance .pmu-today.pmu-selected .pmu-today-border, .pickmeup .pmu-instance .pmu-today:hover .pmu-today-border')
  .css('background')`,
`$('.pickmeup .pmu-instance .pmu-today.pmu-selected .pmu-today-border, .pickmeup .pmu-instance .pmu-today:hover .pmu-today-border')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-today-border')
  .css('border')`,
`$('.pickmeup .pmu-instance .pmu-today-border')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover')
  .css('background')`,
`$('.pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-not-in-month')
  .css('background')`,
`$('.pickmeup .pmu-instance .pmu-not-in-month')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-not-in-month.pmu-selected')
  .css('background')`,


`$('.pickmeup .pmu-instance .pmu-disabled')
  .css('background')`,
`$('.pickmeup .pmu-instance .pmu-disabled')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-disabled:hover')
  .css('background')`,
`$('.pickmeup .pmu-instance .pmu-disabled:hover')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-selected')
  .css('background')`,
`$('.pickmeup .pmu-instance .pmu-selected')
  .css('color')`,


`$('.pickmeup .pmu-instance nav')
  .css('color')`,


`$('.pickmeup .pmu-instance nav :first-child :hover')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-months *, .pickmeup .pmu-instance .pmu-years *')
  .css('border')`,


`$('.pickmeup .pmu-instance .pmu-day-of-week')
  .css('color')`,


`$('.pickmeup .pmu-instance .pmu-day-of-week *')
  .css('border')`,


`$('.pickmeup .pmu-instance .pmu-days *')
  .css('border')`,


`$('#menu.date_picker .pickmeup .pmu-instance .pmu-button:not(.pmu-disabled):hover, #menu.date_picker .pickmeup .pmu-selected')
  .css('background')`,


`$('#menu.date_picker li.date_picker_item a')
  .css('color')`,


`$('#menu.date_picker li.date_picker_item a:hover')
  .css('color')`,


`$('#menu.date_picker li.date_picker_item.highlighted a')
  .css('color')`,


`$('#file_member_filter')
  .css('background')`,


`$('#client-ui .member_filter')
  .css('border')`,


`$('#client-ui .member_file_filter_menu .searchable_member_list_scroller .team_list_item:hover .channel_page_member_row')
  .css('background')`,


`$('#client-ui .member_file_filter_menu .searchable_member_list_scroller .team_list_item:hover .member')
  .css('color')`,


`$('#client-ui #team_list_container #team_filter .member_filter')
  .css('background-color')`,
`$('#client-ui #team_list_container #team_filter .member_filter')
  .css('border-left')`,


`$('#client-ui #file_member_filter')
  .css('border-color')`,


`$('#client-ui #file_member_filter .member_filter')
  .css('border-color')`,


`$('#client-ui .team_tabs_container')
  .css('border-bottom')`,


`$('#team_filter .icon_search')
  .css('color')`,


`$('#team_filter a.icon_close')
  .css('color')`,


`$('#team_filter a.icon_close:hover')
  .css('color')`,


`$('.filter_header')
  .css('background-color')`,


`$('.popover_menu')
  .css('background-color')`,
`$('.popover_menu')
  .css('border-top')`,


`$('.popover_menu .arrow::after')
  .css('background-color')`,


`$('.popover_menu .arrow_shadow::after')
  .css('background-color')`,
`$('.popover_menu .arrow_shadow::after')
  .css('box-shadow')`,


`$('.popover_menu.showing_header .arrow::after, .popover_menu.showing_header .arrow_shadow::after')
  .css('background-color')`,


`$('.popover_menu .content')
  .css('background-color')`,


`$('.tab_complete_ui')
  .css('background')`,
`$('.tab_complete_ui')
  .css('border')`,
`$('.tab_complete_ui')
  .css('box-shadow')`,


`$('.tab_complete_ui .tab_complete_ui_header')
  .css('background')`,
`$('.tab_complete_ui .tab_complete_ui_header')
  .css('border-bottom')`,
`$('.tab_complete_ui .tab_complete_ui_header')
  .css('color')`,
`$('.tab_complete_ui .tab_complete_ui_header')
  .css('text-shadow')`,


`$('.tab_complete_ui ul.type_emoji li')
  .css('color')`,


`$('.tab_complete_ui ul.type_members .broadcast_info, .tab_complete_ui ul.type_members .realname')
  .css('color')`,


`$('.tab_complete_ui ul.type_members .unify_broadcast')
  .css('color')`,


`$('.tab_complete_ui ul.type_members .unify_broadcast .ts_icon_broadcast')
  .css('color')`,


`$('.tab_complete_ui ul.type_cmds li.tab_complete_ui_group .group_name')
  .css('color')`,


`$('.tab_complete_ui ul.type_cmds li.tab_complete_ui_group .group_divider')
  .css('border-bottom')`,
`$('.tab_complete_ui ul.type_cmds li.tab_complete_ui_group .group_divider')
  .css('border-top-color')`,


`$('.tab_complete_ui ul.type_cmds li.tab_complete_ui_item .cmd-left-td, .tab_complete_ui ul.type_cmds li.tab_complete_ui_item .cmd-right-td')
  .css('color')`,


`$('.tab_complete_ui ul.type_cmds .cmdname')
  .css('color')`,


`$('.tab_complete_ui ul.type_cmds .cmddesc')
  .css('color')`,


`$('.tab_complete_ui li.tab_complete_ui_item, .tab_complete_ui li.tab_complete_ui_group')
  .css('border-bottom')`,


`$('.tab_complete_ui li.tab_complete_ui_item.active, .tab_complete_ui li.tab_complete_ui_group.active')
  .css('background')`,
`$('.tab_complete_ui li.tab_complete_ui_item.active, .tab_complete_ui li.tab_complete_ui_group.active')
  .css('border-bottom-color')`,
`$('.tab_complete_ui li.tab_complete_ui_item.active, .tab_complete_ui li.tab_complete_ui_group.active')
  .css('text-shadow')`,


`$('.tab_complete_ui li.tab_complete_ui_item.active span, .tab_complete_ui li.tab_complete_ui_group.active span')
  .css('color')`,


`$('.tab_complete_ui .not_in_channel')
  .css('color')`,


`$('#team_menu')
  .css('background')`,
`$('#team_menu')
  .css('border-bottom')`,
`$('#team_menu')
  .css('color')`,


`$('#team_menu.active, #team_menu:hover')
  .css('background')`,
`$('#team_menu.active, #team_menu:hover')
  .css('border-bottom-color')`,


`$('#team_menu.active i, #team_menu:hover i')
  .css('color')`,


`$('#team_menu i')
  .css('color')`,


`$('#team_menu .presence .presence_icon')
  .css('text-shadow')`,


`$('#team_menu .team_name_caret, #team_menu .notifications_menu_btn')
  .css('color')`,


`$('#team_menu_user')
  .css('color')`,


`$('#team_menu_user_name, #team_menu_user_details')
  .css('color')`,
`$('#team_menu_user_name, #team_menu_user_details')
  .css('opacity')`,


`$('.slack_menu_section::before')
  .css('border-top-color')`,


`$('.slack_menu_header_secondary')
  .css('color')`,


`$('.slack_menu_download')
  .css('background-color')`,


`$('.slack_menu_download ts-icon')
  .css('color')`,


`$('#menu_items_scroller::-webkit-scrollbar-track')
  .css('background')`,


`$('#limit_meter:hover #limit_meter_message_body')
  .css('color')`,


`$('#limit_meter_message_body')
  .css('color')`,


`$('.channel_header')
  .css('background')`,
`$('.channel_header')
  .css('box-shadow')`,


`$('.channel_header .blue_on_hover:hover')
  .css('color')`,


`$('#client_body:not(.onboarding)::before')
  .css('background')`,
`$('#client_body:not(.onboarding)::before')
  .css('border-bottom')`,
`$('#client_body:not(.onboarding)::before')
  .css('box-shadow')`,


`$('.messages_header')
  .css('color')`,


`$('.channel_title .channel_name_container .channel_name')
  .css('color')`,


`$('.channel_title .channel_name_container .channel_name.muted')
  .css('color')`,


`$('.channel_title .channel_name_container .ts_icon_shared_channel.away, .channel_title .channel_name_container .mpdm_member.away')
  .css('color')`,


`$('.channel_title .channel_name_container .muted_icon')
  .css('color')`,


`$('.channel_title .channel_name_container .muted_icon:hover')
  .css('color')`,


`$('#im_title.away')
  .css('color')`,


`$('.channel_header_info button')
  .css('color')`,


`$('.channel_title_info')
  .css('background')`,
`$('.channel_title_info')
  .css('color')`,


`$('.channel_title_info .channel_details_toggle, .channel_title_info .channel_actions_toggle')
  .css('color')`,


`$('.channel_header_icon')
  .css('color')`,


`$('.channel_calls_button .call_icon.call_window_offline')
  .css('color')`,


`$('.channel_actions_toggle.active:focus, .details_toggle.active:focus')
  .css('color')`,


`$('#flex_menu_toggle.active, #flex_menu_toggle.active:focus')
  .css('color')`,


`$('#flex_menu_toggle .flex_menu_download_circle')
  .css('background')`,


`$('#flex_menu_toggle .flex_menu_download_circle canvas')
  .css('background')`,


`$('#flex_menu_toggle.unread #help_icon_circle_count')
  .css('background-color')`,
`$('#flex_menu_toggle.unread #help_icon_circle_count')
  .css('color')`,


`$('#flex_menu_toggle.open #help_icon_circle_count')
  .css('background-color')`,
`$('#flex_menu_toggle.open #help_icon_circle_count')
  .css('color')`,


`$('#canvases_toggle.active, #details_toggle.active, #recent_mentions_toggle.active, #sli_recap_toggle.active, #stars_toggle.active')
  .css('background')`,
`$('#canvases_toggle.active, #details_toggle.active, #recent_mentions_toggle.active, #sli_recap_toggle.active, #stars_toggle.active')
  .css('color')`,


`$('#canvases_toggle.active:hover, #details_toggle.active:hover, #recent_mentions_toggle.active:hover, #sli_recap_toggle.active:hover, #stars_toggle.active:hover')
  .css('background')`,
`$('#canvases_toggle.active:hover, #details_toggle.active:hover, #recent_mentions_toggle.active:hover, #sli_recap_toggle.active:hover, #stars_toggle.active:hover')
  .css('color')`,


`$('#recent_mentions_toggle:hover')
  .css('color')`,


`$('#rxn_toast_div')
  .css('background')`,
`$('#rxn_toast_div')
  .css('border')`,


`$('.presence')
  .css('color')`,


`$('#channel_topic_text')
  .css('background')`,


`$('#edit_topic_container:hover')
  .css('overflow')`,


`$('#edit_topic_trigger')
  .css('color')`,


`$('.day_divider, .mention_day_container_div .day_divider')
  .css('background')`,
`$('.day_divider, .mention_day_container_div .day_divider')
  .css('color')`,


`$('.day_divider hr, .mention_day_container_div .day_divider hr')
  .css('border-bottom')`,
`$('.day_divider hr, .mention_day_container_div .day_divider hr')
  .css('border-top')`,


`$('.day_divider .day_divider_label')
  .css('background')`,


`$('.day_container .day_msgs')
  .css('border-top')`,


`$('.day_container.unread_day_container .day_msgs')
  .css('border-color')`,


`$('.day_container .day_divider')
  .css('background')`,
`$('.day_container .day_divider')
  .css('color')`,


`$('.day_container .day_divider .day_divider_label')
  .css('background')`,


`$('.search_form')
  .css('border-color')`,


`$('.search_form .search_input')
  .css('background')`,


`$('.search_form:hover')
  .css('border-color')`,


`$('.search_focused .search_form')
  .css('border-color')`,


`$('.search_clear_icon .ts_icon_times_circle')
  .css('color')`,


`$('#search_spinner')
  .css('color')`,


`$('#search_container .search_input')
  .css('background')`,


`$('#search_container .icon_search')
  .css('color')`,


`$('#search_container .icon_close')
  .css('color')`,


`$('#team_filter .icon_search, #team_filter .ts_icon_spinner, #user_group_filter .icon_search, #user_group_filter .ts_icon_spinner, .searchable_member_list_search_bar .icon_search, .searchable_member_list_search_bar .ts_icon_spinner')
  .css('color')`,


`$('#team_filter a.icon_close, #user_group_filter a.icon_close, .searchable_member_list_search_bar a.icon_close')
  .css('color')`,


`$('#team_filter a.icon_close:hover, #user_group_filter a.icon_close:hover, .searchable_member_list_search_bar a.icon_close:hover')
  .css('color')`,


`$('#msgs_overlay_div')
  .css('background')`,


`$('#col_messages')
  .css('box-shadow')`,


`$('.c-message:hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight), .c-message--hover:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight), .c-message--focus:not(.c-message--highlight):not(.c-message--standalone):not(.c-message--pinned):not(.c-message--ephemeral):not(.c-message--custom_response):not(.c-message--starred):not(.c-message--sli_highlight)')
  .css('background-color')`,


`$('.c-message_attachment__pretext')
  .css('color')`,


`$('.c-message_attachment')
  .css('color')`,

}`$('.c-message__body')
  .css('color')`,

}`$('.c-email__sender_collapsed, .c-email__title_collapsed')
  .css('color')`,

}`$('.c-file_container')
  .css('background')`,


`$('ts-message')
  .css('color')`,


`$('ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply)')
  .css('background')`,
`$('ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply), ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply)')
  .css('box-shadow')`,


`$('ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned, ts-message.active:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned), ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned, ts-message.message--focus:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned), ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).is_pinned, ts-message:hover:not(.standalone):not(.multi_delete_mode):not(.highlight):not(.new_reply).show_recap:not(.is_pinned)')
  .css('background')`,


`$('ts-message.active .edited, ts-message.active .reply_bar .last_reply_at, ts-message.active .timestamp, ts-message.active.automated .message_body, ts-message.message--focus .edited, ts-message.message--focus .reply_bar .last_reply_at, ts-message.message--focus .timestamp, ts-message.message--focus.automated .message_body, ts-message:hover .edited, ts-message:hover .reply_bar .last_reply_at, ts-message:hover .timestamp, ts-message:hover.automated .message_body')
  .css('color')`,


`$('ts-message.active .meta, ts-message.message--focus .meta, ts-message:hover .meta')
  .css('color')`,


`$('ts-message.active .meta.msg_inline_file_preview_toggler a, ts-message.message--focus .meta.msg_inline_file_preview_toggler a, ts-message:hover .meta.msg_inline_file_preview_toggler a')
  .css('color')`,


`$('ts-message.is_pinned')
  .css('background')`,


`$('ts-message .timestamp')
  .css('color')`,


`$('ts-message .temp_msg_controls')
  .css('color')`,


`$('ts-message .edited')
  .css('color')`,


`$('ts-message:hover .edited')
  .css('color')`,


`$('ts-message .only_visible_to_user')
  .css('color')`,


`$('ts-message.ephemeral')
  .css('color')`,


`$('ts-message .bot_label')
  .css('background')`,
`$('ts-message .bot_label')
  .css('color')`,


`$('ts-message .in_reply_to')
  .css('background')`,
`$('ts-message .in_reply_to')
  .css('color')`,


`$('ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display)')
  .css('border')`,


`$('ts-message.unprocessed')
  .css('color')`,


`$('ts-message.highlight')
  .css('background')`,


`$('ts-message.highlight:hover')
  .css('background')`,


`$('ts-message .is_highlights_holder')
  .css('color')`,


`$('ts-message .is_highlights_holder ts-icon')
  .css('color')`,


`$('ts-message .is_highlights_holder .highlights_feedback_link')
  .css('color')`,


`$('ts-message .is_highlights_holder .highlights_feedback a:not(.highlights_feedback_link)')
  .css('color')`,


`$('ts-message .recap_highlight')
  .css('background')`,


`$('ts-message .recap_highlight a')
  .css('color')`,


`$('ts-message.delete_mode, ts-message.multi_delete_mode')
  .css('background')`,


`$('ts-message.automated .message_body')
  .css('color')`,


`$('ts-message .action_hover_container')
  .css('border')`,


`$('ts-message .action_hover_container:hover')
  .css('border-color')`,
`$('ts-message .action_hover_container:hover')
  .css('box-shadow')`,


`$('ts-message .action_hover_container:hover a')
  .css('background')`,
`$('ts-message .action_hover_container:hover a')
  .css('border-right')`,


`$('ts-message .action_hover_container .btn_msg_action')
  .css('background')`,
`$('ts-message .action_hover_container .btn_msg_action')
  .css('border-right')`,
`$('ts-message .action_hover_container .btn_msg_action')
  .css('color')`,


`$('ts-message .action_hover_container .btn_msg_action:hover')
  .css('color')`,


`$('ts-message .action_hover_container .btn_msg_action.active, ts-message .action_hover_container .btn_msg_action:active')
  .css('background')`,
`$('ts-message .action_hover_container .btn_msg_action.active, ts-message .action_hover_container .btn_msg_action:active')
  .css('color')`,


`$('ts-message.selected')
  .css('background')`,


`$('ts-message.selected:not(.delete_mode)')
  .css('background')`,


`$('ts-message.selected:hover')
  .css('background')`,


`$('ts-message .meta')
  .css('color')`,


`$('ts-message .meta.msg_inline_img_toggler .member, ts-message .meta.msg_inline_img_toggler .service_link, ts-message .meta.msg_inline_file_preview_toggler .member, ts-message .meta.msg_inline_file_preview_toggler .service_link')
  .css('color')`,


`$('ts-message .meta.msg_inline_img_toggler .msg_inline_media_toggler, ts-message .meta.msg_inline_img_toggler .ts_icon_dropbox, ts-message .meta.msg_inline_img_toggler a, ts-message .meta.msg_inline_file_preview_toggler .msg_inline_media_toggler, ts-message .meta.msg_inline_file_preview_toggler .ts_icon_dropbox, ts-message .meta.msg_inline_file_preview_toggler a')
  .css('color')`,


`$('ts-message .pinned_item_message_header')
  .css('color')`,


`$('ts-message .mention')
  .css('background')`,
`$('ts-message .mention')
  .css('color')`,


`$('ts-message .internal_member_link')
  .css('background')`,
`$('ts-message .internal_member_link')
  .css('border')`,
`$('ts-message .internal_member_link')
  .css('color')`,


`$('ts-message .internal_member_link:hover')
  .css('color')`,


`$('ts-message.show_recap:not(.is_pinned)')
  .css('background')`,


`$('ts-message.show_recap:not(.is_pinned):hover')
  .css('background')`,


`$('.ephemeral.message .message_content')
  .css('color')`,


`$('ts-mention')
  .css('background')`,
`$('ts-mention')
  .css('color')`,


`$('.selecting_messages ts-message:hover')
  .css('background')`,


`$('.selecting_messages ts-message.multi_delete_mode:hover')
  .css('background')`,


`$('#convo_container')
  .css('background-color')`,


`$('#convo_container #message_edit_container')
  .css('border-bottom')`,
`$('#convo_container #message_edit_container')
  .css('border-top')`,


`$('#convo_container ts-conversation::after')
  .css('background')`,
`$('#convo_container ts-conversation::after')
  .css('background')`,
`$('#convo_container ts-conversation::after')
  .css('background')`,


`$('#convo_container ts-conversation::before')
  .css('background')`,
`$('#convo_container ts-conversation::before')
  .css('background')`,
`$('#convo_container ts-conversation::before')
  .css('background')`,


`$('#convo_container ts-conversation ts-message.selected')
  .css('background')`,


`$('#convo_container ts-conversation ts-relatives::after')
  .css('background')`,


`$('#convo_container ts-conversation ts-relatives ts-message.deleted .message_icon i')
  .css('background-color')`,
`$('#convo_container ts-conversation ts-relatives ts-message.deleted .message_icon i')
  .css('color')`,


`$('#convo_container ts-conversation ts-relatives ts-message.deleted .message_content')
  .css('color')`,


`$('#convo_container ts-conversation ts-relatives ts-message:not(.selected):not(.highlight):not(.delete_mode)')
  .css('background-color')`,


`$('#convo_container ts-conversation ts-relatives ts-message:not(.selected):not(.highlight):not(.delete_mode).new')
  .css('background-color')`,


`$('#msgs_div .unread_divider hr')
  .css('border-top')`,


`$('#msgs_div .unread_divider .divider_label')
  .css('background')`,
`$('#msgs_div .unread_divider .divider_label')
  .css('color')`,


`$('#msgs_div .unread_divider.no_unreads hr')
  .css('border-top-color')`,


`$('#msgs_div .unread_divider.no_unreads .divider_label')
  .css('color')`,


`$('.channel_archive_messages.card .col:first-child')
  .css('border-right')`,


`$('.star')
  .css('color')`,


`$('.star_item')
  .css('border-bottom')`,


`$('.star_item .star_meta')
  .css('color')`,


`$('.bot_message .message_sender')
  .css('color')`,


`$('.bot_message .message_sender a')
  .css('color')`,


`$('.color_USLACKBOT:not(.nuc), #col_channels ul li:not(.active):not(.away)>.color_USLACKBOT:not(.nuc), #col_channels:not(.show_presence) ul li>.color_USLACKBOT:not(.nuc)')
  .css('color')`,


`$('#msgs_scroller_div #end_display_div #end_display_status')
  .css('color')`,


`$('#msgs_scroller_div #end_display_div #end_display_meta')
  .css('color')`,


`$('#msgs_scroller_div #end_display_div #end_display_meta h1')
  .css('color')`,


`$('#msgs_scroller_div #end_display_div p')
  .css('color')`,


`$('.member_mentions_options')
  .css('background-color')`,
`$('.member_mentions_options')
  .css('border-top')`,


`$('.dm_badge .dm_badge_meta')
  .css('color')`,


`$('.dm_badge a')
  .css('color')`,


`$('.dm_badge a.member_preview_link')
  .css('color')`,


`$('.dm_badge .dm_badge:hover a')
  .css('color')`,


`$('.dm_badge .hint')
  .css('color')`,


`$('#toggle-subscription-status .subscription_desc')
  .css('color')`,


`$('.bot_label')
  .css('background')`,
`$('.bot_label')
  .css('color')`,


`$('.attachment_group.has_container')
  .css('background')`,
`$('.attachment_group.has_container')
  .css('border')`,


`$('.attachment_group.has_container .inline_attachment::after')
  .css('background-color')`,


`$('.attachment_group.has_container.has_link:hover')
  .css('border-bottom-color')`,
`$('.attachment_group.has_container.has_link:hover')
  .css('border-left-color')`,
`$('.attachment_group.has_container.has_link:hover')
  .css('border-right-color')`,
`$('.attachment_group.has_container.has_link:hover')
  .css('box-shadow')`,


`$('.attachment_group .media_caret')
  .css('color')`,


`$('.attachment_group .attachment_source span')
  .css('color')`,


`$('.attachment_group .attachment_source .attachment_source_name+.attachment_author_name::before')
  .css('color')`,


`$('.attachment_group .inline_attachment.reply_broadcast+.attachment_rule')
  .css('color')`,


`$('.attachment_group .inline_attachment.reply_broadcast+.attachment_rule::after')
  .css('border-bottom')`,


`$('.attachment_group .inline_attachment.message_unfurl .attachment_source .attachment_source_name a, .attachment_group .inline_attachment.message_unfurl .attachment_source .attachment_source_name span')
  .css('color')`,


`$('.attachment_group .attachment_title a')
  .css('color')`,


`$('.attachment_group .attachment_footer_text+.attachment_ts::before')
  .css('color')`,


`$('.attachment_group .delete_attachment_link ts-icon::before')
  .css('color')`,


`$('.attachment_group .delete_attachment_link:hover ts-icon::before')
  .css('color')`,


`$('.attachment_still_pending ts-inline-saver')
  .css('color')`,


`$('.msg_inline_attachment_column.column_border')
  .css('background-color')`,


`$('.msg_inline_img_holder .msg_inline_img')
  .css('box-shadow')`,


`$('.msg_inline_attachment_collapser, .msg_inline_attachment_expander, .msg_inline_img_collapser, .msg_inline_img_expander, .msg_inline_media_toggler, .msg_inline_room_preview_collapser, .msg_inline_room_preview_expander')
  .css('color')`,


`$('.msg_inline_attachment_collapser:hover, .msg_inline_attachment_expander:hover, .msg_inline_img_collapser:hover, .msg_inline_img_expander:hover, .msg_inline_media_toggler:hover, .msg_inline_room_preview_collapser:hover, .msg_inline_room_preview_expander:hover')
  .css('color')`,


`$('.msg_inline_img')
  .css('background')`,


`$('.msg_inline_room_preview_collapser')
  .css('color')`,


`$('.msg_inline_room_preview_collapser:hover')
  .css('color')`,


`$('.inline_attachment span.attachment_author_name')
  .css('color')`,


`$('.inline_attachment span.attachment_author_subname, .inline_attachment span.attachment_service_name')
  .css('color')`,


`$('.inline_attachment a span:active, .inline_attachment a span:hover')
  .css('color')`,


`$('.inline_attachment .attachment_footer, .inline_attachment .attachment_ts')
  .css('color')`,


`$('.inline_attachment .attachment_footer a, .inline_attachment .attachment_ts a')
  .css('color')`,


`$('.inline_attachment .attachment_footer a:active, .inline_attachment .attachment_footer a:hover')
  .css('color')`,


`$('.inline_attachment .attachment_ts a:active, .inline_attachment .attachment_ts a:hover')
  .css('color')`,


`$('.inline_attachment .iframe_placeholder, .inline_attachment iframe')
  .css('background-color')`,


`$('.meta.msg_inline_file_preview_toggler, .meta.msg_inline_img_toggler, .dense_meta.msg_inline_file_preview_toggler, .dense_meta.msg_inline_img_toggler')
  .css('color')`,


`$('.meta.msg_inline_file_preview_toggler a[data-file-id], .meta.msg_inline_img_toggler a[data-file-id], .dense_meta.msg_inline_file_preview_toggler a[data-file-id], .dense_meta.msg_inline_img_toggler a[data-file-id]')
  .css('color')`,


`$('.meta.msg_inline_file_preview_toggler:hover, .meta.msg_inline_img_toggler:hover, .dense_meta.msg_inline_file_preview_toggler:hover, .dense_meta.msg_inline_img_toggler:hover')
  .css('color')`,


`$('.meta.msg_inline_file_preview_toggler:hover a[data-file-id], .meta.msg_inline_img_toggler:hover a[data-file-id], .dense_meta.msg_inline_file_preview_toggler:hover a[data-file-id], .dense_meta.msg_inline_img_toggler:hover a[data-file-id]')
  .css('color')`,


`$('.meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title, .meta.msg_inline_img_toggler .msg_inline_file_preview_title, .dense_meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title, .dense_meta.msg_inline_img_toggler .msg_inline_file_preview_title')
  .css('color')`,


`$('.meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title:hover, .meta.msg_inline_img_toggler .msg_inline_file_preview_title:hover, .dense_meta.msg_inline_file_preview_toggler .msg_inline_file_preview_title:hover, .dense_meta.msg_inline_img_toggler .msg_inline_file_preview_title:hover')
  .css('color')`,


`$('.meta.msg_inline_file_preview_toggler .ts_icon.msg_inline_media_toggler:hover, .meta.msg_inline_img_toggler .ts_icon.msg_inline_media_toggler:hover, .dense_meta.msg_inline_file_preview_toggler .ts_icon.msg_inline_media_toggler:hover, .dense_meta.msg_inline_img_toggler .ts_icon.msg_inline_media_toggler:hover')
  .css('color')`,


`$('.meta.meta_feature_fix_files .file_new_window_link:hover, .dense_meta.meta_feature_fix_files .file_new_window_link:hover')
  .css('color')`,


`$('.meta.meta_feature_fix_files .file_new_window_link:hover .file_inline_icon, .dense_meta.meta_feature_fix_files .file_new_window_link:hover .file_inline_icon')
  .css('color')`,


`$('.meta.meta_feature_fix_files .member, .dense_meta.meta_feature_fix_files .member')
  .css('color')`,


`$('.delete_attachment_link')
  .css('color')`,


`$('.delete_attachment_link:hover')
  .css('color')`,


`$('.file_container')
  .css('background')`,
`$('.file_container')
  .css('border')`,
`$('.file_container')
  .css('color')`,


`$('.file_container:hover, .file_container:focus, .file_container.file_menu_open')
  .css('border-bottom-color')`,
`$('.file_container:hover, .file_container:focus, .file_container.file_menu_open')
  .css('border-left-color')`,
`$('.file_container:hover, .file_container:focus, .file_container.file_menu_open')
  .css('border-right-color')`,


`$('.file_container::after, .file_container.post_container::after')
  .css('background-image')`,
`$('.file_container::after, .file_container.post_container::after')
  .css('background-image')`,
`$('.file_container::after, .file_container.post_container::after')
  .css('background-image')`,
`$('.file_container::after, .file_container.post_container::after')
  .css('background-image')`,


`$('.file_container.generic_container .file_header_icon .ts_icon')
  .css('background')`,
`$('.file_container.generic_container .file_header_icon .ts_icon')
  .css('box-shadow')`,
`$('.file_container.generic_container .file_header_icon .ts_icon')
  .css('color')`,


`$('.file_container.generic_container .file_header_icon .ts_icon.snippet')
  .css('background')`,


`$('.file_container.generic_container .file_header_meta .meta_hover')
  .css('background')`,
`$('.file_container.generic_container .file_header_meta .meta_hover')
  .css('color')`,


`$('.file_container .file_header .file_header_meta')
  .css('color')`,


`$('.file_container .file_header+.file_body')
  .css('border-top')`,


`$('.file_container .preview_actions .btn')
  .css('background-color')`,
`$('.file_container .preview_actions .btn')
  .css('color')`,


`$('.file_container .preview_actions .btn::after')
  .css('border-color')`,


`$('.file_container .preview_actions .btn.preview_show_less_header')
  .css('background-color')`,
`$('.file_container .preview_actions .btn.preview_show_less_header')
  .css('color')`,


`$('.file_container .preview_actions .btn.preview_show_less_header::after')
  .css('border')`,


`$('.file_container .preview_actions .btn.preview_show_less_header:focus, .file_container .preview_actions .btn.preview_show_less_header:hover')
  .css('background-color')`,


`$('.file_container .preview_actions .btn.preview_show_less_header:focus::after, .file_container .preview_actions .btn.preview_show_less_header:hover::after')
  .css('border-color')`,


`$('.file_container.image_container .image_body')
  .css('background-color')`,


`$('.file_container.image_container .preview_actions .btn')
  .css('background-color')`,


`$('.file_container.image_container .preview_actions .btn:focus, .file_container.image_container .preview_actions .btn:hover')
  .css('background-color')`,


`$('.file_container.image_container .preview_actions.overflow_preview_actions')
  .css('background')`,
`$('.file_container.image_container .preview_actions.overflow_preview_actions')
  .css('border')`,


`$('.file_container .preview_show .preview_show_btn')
  .css('background')`,
`$('.file_container .preview_show .preview_show_btn')
  .css('color')`,


`$('.file_container.file_menu_open .preview_show_less .preview_show_btn, .file_container:focus .preview_show_less .preview_show_btn, .file_container:hover .preview_show_less .preview_show_btn')
  .css('background')`,
`$('.file_container.file_menu_open .preview_show_less .preview_show_btn, .file_container:focus .preview_show_less .preview_show_btn, .file_container:hover .preview_show_less .preview_show_btn')
  .css('color')`,


`$('.message--focus .file_container .preview_show.preview_show_less .preview_show_btn')
  .css('background')`,
`$('.message--focus .file_container .preview_show.preview_show_less .preview_show_btn')
  .css('color')`,


`$('.msg_inline_video_buttons_div')
  .css('background-color')`,


`$('.msg_inline_video_buttons_div a')
  .css('color')`,
`$('.msg_inline_video_buttons_div a')
  .css('text-shadow')`,


`$('.msg_inline_video_buttons_div a:visited')
  .css('color')`,
`$('.msg_inline_video_buttons_div a:visited')
  .css('text-shadow')`,


`$('.post_body ul.checklist')
  .css('background-color')`,


`$('.post_body ul.checklist li::before')
  .css('background')`,


`$('.post_body ul.checklist li.checked')
  .css('color')`,


`$('.post_body ul.list.checklist li')
  .css('border-bottom')`,


`$('.post_body ul.list.checklist li.checked')
  .css('color')`,


`$('.post_body .message')
  .css('background-color')`,


`$('.post_body code, .post_body pre')
  .css('background')`,


`$('ts-message .reply_bar .reply_bar_caret, ts-message .reply_bar .view_conv_hover, ts-message .reply_bar .last_reply_at')
  .css('color')`,


`$('ts-message .reply_bar:hover')
  .css('background')`,
`$('ts-message .reply_bar:hover')
  .css('border-color')`,


`$('.inline_color_block')
  .css('border-color')`,


`$('.messages_banner')
  .css('color')`,
`$('.messages_banner')
  .css('text-shadow')`,


`$('.messages_banner a')
  .css('color')`,


`$('.messages_banner a:hover')
  .css('color')`,


`$('#connection_div')
  .css('background')`,


`$('#archives_return')
  .css('background')`,
`$('#archives_return')
  .css('color')`,


`$('#archives_return.warning')
  .css('background')`,


`$('#archives_return a')
  .css('color')`,


`$('#archives_return a:hover')
  .css('color')`,


`$('#messages_unread_status')
  .css('background')`,


`$('#messages_unread_status:hover')
  .css('background')`,


`$('#messages_unread_status:hover .clear_unread_messages')
  .css('background')`,


`$('#messages_unread_status:hover .clear_unread_messages:hover')
  .css('background')`,


`$('#messages_unread_status.quiet')
  .css('background')`,
`$('#messages_unread_status.quiet')
  .css('color')`,
`$('#messages_unread_status.quiet')
  .css('text-shadow')`,


`$('#messages_unread_status.quiet a')
  .css('color')`,


`$('.clear_unread_messages')
  .css('border-left')`,


`$('#messages_container.has_top_messages_banner::before')
  .css('background')`,


`$('.end_div_msg_lim')
  .css('background-color')`,
`$('.end_div_msg_lim')
  .css('background-image')`,


`$('#archives_end_div_msg_lim h1, #end_display_msg_lim h1')
  .css('color')`,


`$('#archives_end_div_msg_lim h2, #end_display_msg_lim h2')
  .css('color')`,


`$('code')
  .css('background-color')`,
`$('code')
  .css('border')`,
`$('code')
  .css('color')`,


`$('.file_list_item.snippet .snippet_preview')
  .css('background')`,


`$('.snippet_preview, .snippet_body')
  .css('background')`,


`$('.snippet_preview pre, .snippet_body pre')
  .css('color')`,


`$('.file_container .CodeMirror .CodeMirror-code>div::before, .file_container .CodeMirror .sssh-line::before, .file_container .sssh-code .CodeMirror-code>div::before, .file_container .sssh-code .sssh-line::before')
  .css('background-color')`,
`$('.file_container .CodeMirror .CodeMirror-code>div::before, .file_container .CodeMirror .sssh-line::before, .file_container .sssh-code .CodeMirror-code>div::before, .file_container .sssh-code .sssh-line::before')
  .css('border-right')`,
`$('.file_container .CodeMirror .CodeMirror-code>div::before, .file_container .CodeMirror .sssh-line::before, .file_container .sssh-code .CodeMirror-code>div::before, .file_container .sssh-code .sssh-line::before')
  .css('color')`,


`$('.CodeMirror')
  .css('background')`,
`$('.CodeMirror')
  .css('border')`,
`$('.CodeMirror')
  .css('color')`,


`$('.CodeMirror pre')
  .css('background')`,


`$('.CodeMirror div.CodeMirror-cursor')
  .css('border-left')`,


`$('.CodeMirror.cm-fat-cursor div.CodeMirror-cursor')
  .css('background')`,


`$('.CodeMirror .CodeMirror-gutters')
  .css('background-color')`,
`$('.CodeMirror .CodeMirror-gutters')
  .css('border-right')`,


`$('.CodeMirror-gutter-filler, .CodeMirror-scrollbar-filler')
  .css('background-color')`,


`$('.CodeMirror-linenumber')
  .css('color')`,


`$('.CodeMirror-guttermarker')
  .css('color')`,


`$('.CodeMirror-guttermarker-subtle')
  .css('color')`,


`$('.CodeMirror-ruler')
  .css('border-left')`,


`$('.cm-s-default .cm-keyword')
  .css('color')`,


`$('.cm-s-default .cm-atom')
  .css('color')`,


`$('.cm-s-default .cm-number')
  .css('color')`,


`$('.cm-s-default .cm-def')
  .css('color')`,


`$('.cm-s-default .cm-variable-2')
  .css('color')`,


`$('.cm-s-default .cm-variable-3')
  .css('color')`,


`$('.cm-s-default .cm-comment')
  .css('color')`,


`$('.cm-s-default .cm-string')
  .css('color')`,


`$('.cm-s-default .cm-string-2')
  .css('color')`,


`$('.cm-s-default .cm-meta')
  .css('color')`,


`$('.cm-s-default .cm-qualifier')
  .css('color')`,


`$('.cm-s-default .cm-builtin')
  .css('color')`,


`$('.cm-s-default .cm-bracket')
  .css('color')`,


`$('.cm-s-default .cm-tag')
  .css('color')`,


`$('.cm-s-default .cm-attribute')
  .css('color')`,


`$('.cm-s-default .cm-header')
  .css('color')`,


`$('.cm-s-default .cm-quote')
  .css('color')`,


`$('.cm-s-default .cm-hr')
  .css('color')`,


`$('.cm-s-default .cm-link')
  .css('color')`,


`$('.cm-negative')
  .css('color')`,


`$('.cm-positive')
  .css('color')`,


`$('.cm-invalidchar, .cm-s-default .cm-error')
  .css('color')`,


`$('div.CodeMirror span.CodeMirror-matchingbracket')
  .css('color')`,


`$('div.CodeMirror span.CodeMirror-nonmatchingbracket')
  .css('color')`,


`$('.CodeMirror-matchingtag')
  .css('background')`,


`$('.CodeMirror-activeline-background')
  .css('background')`,


`$('.CodeMirror-selected')
  .css('background')`,


`$('.CodeMirror-focused .CodeMirror-selected')
  .css('background')`,


`$('.cm-searching')
  .css('background')`,


`$('.sssh-keyword')
  .css('color')`,


`$('.sssh-atom')
  .css('color')`,


`$('.sssh-number')
  .css('color')`,


`$('.sssh-def')
  .css('color')`,


`$('.sssh-variable')
  .css('color')`,


`$('.sssh-variable-2')
  .css('color')`,


`$('.sssh-variable-3')
  .css('color')`,


`$('.sssh-operator')
  .css('color')`,


`$('.sssh-property')
  .css('color')`,


`$('.sssh-comment')
  .css('color')`,


`$('.sssh-string')
  .css('color')`,


`$('.sssh-string-2')
  .css('color')`,


`$('.sssh-meta')
  .css('color')`,


`$('.sssh-error')
  .css('color')`,


`$('.sssh-qualifier')
  .css('color')`,


`$('.sssh-builtin')
  .css('color')`,


`$('.sssh-bracket')
  .css('color')`,


`$('.sssh-tag')
  .css('color')`,


`$('.sssh-attribute')
  .css('color')`,


`$('.sssh-header')
  .css('color')`,


`$('.sssh-quote')
  .css('color')`,


`$('.sssh-hr')
  .css('color')`,


`$('.sssh-link')
  .css('color')`,


`$('.dense_theme ts-message')
  .css('color')`,


`$('.dense_theme ts-message.first .message_gutter .timestamp, .dense_theme ts-message.selected .message_gutter .timestamp')
  .css('color')`,


`$('.dense_theme ts-message .message_content .message_current_status')
  .css('border-color')`,


`$('.light_theme ts-message')
  .css('color')`,


`$('.light_theme ts-message .message_content .message_sender, .light_theme ts-message .message_content .meta .message_sender:hover')
  .css('color')`,


`$('.light_theme ts-message .comment::before')
  .css('color')`,


`$('.channel_overlay')
  .css('border-color')`,
`$('.channel_overlay')
  .css('color')`,


`$('.channel_overlay.channel_overlay_redesign .channel_overlay_title')
  .css('color')`,


`$('.channel_overlay.channel_overlay_redesign li')
  .css('color')`,


`$('.channel_overlay_title_wrap')
  .css('border-color')`,


`$('.channel_overlay_title_shared')
  .css('color')`,


`$('pre')
  .css('background')`,
`$('pre')
  .css('border')`,
`$('pre')
  .css('color')`,


`$('pre span.mention')
  .css('padding')`,


`$('#page pre, body>pre')
  .css('background')`,
`$('#page pre, body>pre')
  .css('color')`,


`$('body>pre')
  .css('background')`,


`$('.special_formatting_quote .quote_bar')
  .css('background-color')`,


`$('#threads_msgs_scroller_div')
  .css('background')`,


`$('#threads_msgs_scroller_div:not(.loading)::before')
  .css('background')`,


`$('#threads_msgs_scroller_div.loading::before')
  .css('color')`,


`$('#threads_msgs_scroller_div .threads_caught_up_divider .divider_line')
  .css('border-top')`,


`$('#threads_msgs_scroller_div .threads_caught_up_divider .divider_label')
  .css('background')`,
`$('#threads_msgs_scroller_div .threads_caught_up_divider .divider_label')
  .css('color')`,


`$('#threads_msgs_scroller_div.loading')
  .css('background')`,


`$('#threads_msgs_scroller_div.loading::before')
  .css('color')`,


`$('#threads_view_banner.messages_banner')
  .css('background')`,


`$('#threads_view_banner.messages_banner:hover')
  .css('background')`,


`$('#threads_view_banner.messages_banner:hover .clear_unread_messages')
  .css('background')`,


`$('#threads_msgs.new_banner_is_showing::before')
  .css('background')`,


`$('ts-thread')
  .css('background')`,


`$('ts-thread .reply_input_container .inline_message_input_container form textarea')
  .css('border-color')`,
`$('ts-thread .reply_input_container .inline_message_input_container form textarea')
  .css('color')`,


`$('ts-thread .reply_input_container .collapsed_input_placeholder, ts-thread .reply_input_container .join_channel_from_thread_container, ts-thread .reply_input_container .reply_limited_in_general')
  .css('background')`,
`$('ts-thread .reply_input_container .collapsed_input_placeholder, ts-thread .reply_input_container .join_channel_from_thread_container, ts-thread .reply_input_container .reply_limited_in_general')
  .css('border-color')`,


`$('ts-thread .thread_messages')
  .css('background')`,
`$('ts-thread .thread_messages')
  .css('border-color')`,


`$('ts-thread ts-message.new_reply')
  .css('background')`,


`$('ts-thread ts-message.new_reply:hover')
  .css('background')`,


`$('ts-thread .thread_header .thread_channel_name a')
  .css('color')`,


`$('ts-thread .thread_header .thread_action_btns button')
  .css('color')`,


`$('ts-thread .new_reply_indicator .blue_dot')
  .css('color')`,


`$('#convo_tab .thread_participants, ts-thread .thread_participants')
  .css('color')`,


`$('#convo_loading_indicator')
  .css('background-image')`,


`$('.reply_input_container .inline_message_input_container .ql-container')
  .css('background-color')`,
`$('.reply_input_container .inline_message_input_container .ql-container')
  .css('border')`,


`$('.reply_input_container .inline_message_input_container .ql-container .ql-editor::-webkit-scrollbar-thumb')
  .css('background-color')`,


`$('.reply_input_container .inline_message_input_container .ql-container .ql-editor::-webkit-scrollbar-thumb:hover')
  .css('background-color')`,


`$('.reply_input_container .inline_message_input_container .ql-container.focus')
  .css('border-color')`,


`$('.reply_input_container .inline_message_input_container .ql-container.focus~.emo_menu')
  .css('color')`,


`$('.reply_input_container .inline_message_input_container .ql-container~.emo_menu')
  .css('color')`,


`$('#file_reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container, #reply_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container, .reply_input_container .reply_container_info .reply_broadcast_buttons_container .reply_broadcast_label_container')
  .css('color')`,


`$('#unread_msgs_scroller_div::after')
  .css('background')`,


`$('#unread_msgs_scroller_div.loading')
  .css('background-image')`,


`$('#unread_msgs_scroller_div.loading::before')
  .css('color')`,


`$('#unread_msgs_div .day_divider .day_divider_line')
  .css('border-top-color')`,


`$('.unread_group.marked_as_read .unread_group_header')
  .css('background')`,


`$('.unread_group_header')
  .css('background')`,
`$('.unread_group_header')
  .css('border-top-color')`,
`$('.unread_group_header')
  .css('color')`,


`$('.unread_group_header .unread_group_collapse_toggle:hover ts-icon')
  .css('color')`,


`$('.unread_group_header .unread_group_collapse_caret .ts_icon_caret_down')
  .css('color')`,


`$('.collapsed .unread_group_header .ts_icon_caret_right, .collapsing .unread_group_header .ts_icon_caret_right')
  .css('color')`,


`$('.mark_as_read_checkmark')
  .css('color')`,


`$('.bottom_mark_all_read')
  .css('border-top-color')`,


`$('.unread_group_header_name a')
  .css('color')`,


`$('.unread_group_footer .unread_group_new .unread_group_new_text')
  .css('color')`,


`$('.unread_group_footer .unread_group_new:hover .unread_group_new_text')
  .css('color')`,


`$('.unread_empty_state_message')
  .css('color')`,


`$('.unread_empty_state_undo_inner')
  .css('background')`,
`$('.unread_empty_state_undo_inner')
  .css('color')`,


`$('.unread_empty_state_undo_action')
  .css('color')`,


`$('.unread_empty_state_refresh')
  .css('background')`,


`$('.unread_msgs_loading')
  .css('background')`,
`$('.unread_msgs_loading')
  .css('background-image')`,


`$('#col_flex')
  .css('background')`,


`$('#flex_contents')
  .css('background')`,


`$('#flex_contents .heading')
  .css('background')`,
`$('#flex_contents .heading')
  .css('border-bottom-color')`,
`$('#flex_contents .heading')
  .css('color')`,


`$('#flex_contents .heading a')
  .css('color')`,


`$('#flex_contents .heading a:hover')
  .css('color')`,


`$('#flex_contents .heading a.close_flexpane')
  .css('color')`,


`$('#flex_contents .heading .cancel_link')
  .css('color')`,


`$('#flex_contents .heading .menu_heading:hover')
  .css('color')`,


`$('#flex_contents .heading .menu_icon')
  .css('color')`,


`$('#flex_contents .heading .menu_icon:hover')
  .css('color')`,


`$('#flex_contents .heading_text')
  .css('color')`,


`$('#flex_contents .subheading:not(.empty)')
  .css('background')`,
`$('#flex_contents .subheading:not(.empty)')
  .css('border-top')`,
`$('#flex_contents .subheading:not(.empty)')
  .css('color')`,


`$('#flex_contents .subheading:not(.empty) p a')
  .css('color')`,


`$('#flex_contents .subheading:not(.empty) .filter_menu_label.active .arrow_down')
  .css('color')`,


`$('#flex_contents .toolbar_container')
  .css('background')`,


`$('#flex_contents .flexpane_tab_bar li .tab, #flex_contents .flexpane_tab_bar li a')
  .css('color')`,


`$('#flex_contents .flexpane_tab_bar li:hover')
  .css('border-bottom')`,


`$('#flex_contents .flexpane_tab_bar li:hover a, #flex_contents .flexpane_tab_bar li:hover .tab')
  .css('color')`,


`$('#flex_contents .flexpane_tab_bar li.active')
  .css('border-bottom')`,


`$('#flex_contents .flexpane_tab_bar li.active a, #flex_contents .flexpane_tab_bar li.active .tab')
  .css('color')`,


`$('#flex_contents .help')
  .css('border-top')`,
`$('#flex_contents .help')
  .css('color')`,


`$('#flex_contents i.callout')
  .css('color')`,


`$('.close_flexpane')
  .css('color')`,


`$('.close_flexpane:focus, .close_flexpane:hover')
  .css('color')`,


`$('#client-ui.flex_pane_showing #col_flex')
  .css('border-left-color')`,


`$('.toolbar_container')
  .css('background')`,
`$('.toolbar_container')
  .css('border-bottom')`,
`$('.toolbar_container')
  .css('color')`,


`$('.msg_right_link')
  .css('color')`,


`$('.message_location_label')
  .css('color')`,


`$('#details_tab .heading')
  .css('background')`,


`$('#details_tab .heading a.close_flexpane')
  .css('color')`,


`$('#details_tab .heading a.close_flexpane:hover')
  .css('color')`,


`$('#details_tab hr')
  .css('border-top-color')`,


`$('#details_tab .conversation_details .member_name:hover')
  .css('color')`,


`$('#details_tab .conversation_details .member_username:hover')
  .css('color')`,


`$('#details_tab .conversation_details .member_info_timezone')
  .css('border-top-color')`,


`$('#details_tab .channel_page_section')
  .css('background')`,
`$('#details_tab .channel_page_section')
  .css('border-top')`,


`$('#details_tab .channel_page_section .section_header:hover .disclosure_triangle')
  .css('color')`,


`$('#details_tab .channel_page_section .section_header a')
  .css('color')`,


`$('#details_tab .channel_page_section .section_title')
  .css('color')`,


`$('#details_tab .channel_page_section .disclosure_triangle')
  .css('color')`,


`$('#details_tab .channel_page_section .channel_page_members_highlighter, #details_tab .channel_page_section .channel_page_pinned_items_highlighter')
  .css('background')`,


`$('#details_tab .created_by')
  .css('color')`,


`$('#details_tab .channel_page_member_tabs .icon_member_header')
  .css('color')`,


`$('#details_tab .pinned_item:hover')
  .css('border-color')`,


`$('#details_tab .channel_page_action .leave_link')
  .css('color')`,


`$('#details_tab .channel_page_action .leave_link:hover')
  .css('color')`,


`$('#details_tab .channel_section_label .ts_icon_info_circle')
  .css('color')`,


`$('#details_tab .feature_sli_channel_insights .channel_created_section .creator_link, #details_tab .feature_sli_channel_insights .channel_purpose_section .channel_purpose_text')
  .css('color')`,


`$('.channel_page_member_row')
  .css('color')`,


`$('.channel_page_member_row a')
  .css('color')`,


`$('.channel_page_member_row.away')
  .css('color')`,


`$('.channel_page_member_row.away a')
  .css('color')`,


`$('.channel_page_member_row:hover')
  .css('background-color')`,
`$('.channel_page_member_row:hover')
  .css('border-color')`,


`$('.pinned_item')
  .css('color')`,


`$('.pinned_item .pin_file_title')
  .css('color')`,


`$('.pinned_item .pin_member_name a')
  .css('color')`,


`$('.pinned_item .pin_metadata')
  .css('color')`,


`$('.pinned_item .remove_pin')
  .css('color')`,


`$('.pinned_item .remove_pin:hover')
  .css('color')`,


`$('.pinned_item .pinned_message_text .pin_truncate_fade')
  .css('background')`,


`$('.pinned_item.delete_mode')
  .css('border-color')`,


`$('.c-channel_insights__title')
  .css('color')`,


`$('.c-channel_insights__section:not(.c-channel_insights__section--no_border)')
  .css('border-color')`,


`$('.c-channel_insights__drawer_title')
  .css('color')`,


`$('.c-channel_insights__item--user .member_preview_link, .c-channel_insights__item--user .message_sender')
  .css('color')`,


`$('.c-channel_insights__user_title')
  .css('color')`,


`$('.c-channel_insights__channel .channel_link')
  .css('color')`,


`$('.c-channel_insights__member_count')
  .css('color')`,


`$('.c-channel_insights__member_count .ts_icon_user')
  .css('color')`,


`$('.c-channel_insights .c-member__title')
  .css('color')`,


`$('.c-channel_insights__activity')
  .css('border-color')`,


`$('.c-channel_insights_activity_bar_container:hover')
  .css('background-color')`,


`$('.c-channel_insights_activity_bar_container:hover .c-channel_insights__activity_bar')
  .css('background-color')`,


`$('.c-channel_insights__activity_bar')
  .css('background-color')`,


`$('.c-channel_insights__message ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display)')
  .css('background-color')`,
`$('.c-channel_insights__message ts-message.standalone:not(.for_mention_display):not(.for_search_display):not(.for_top_results_search_display):not(.for_star_display)')
  .css('border-color')`,


`$('.c-channel_insights__message--truncate::before')
  .css('background')`,


`$('.c-channel_insights__highlights_description')
  .css('color')`,


`$('.c-channel_insights__date_heading span')
  .css('background-color')`,
`$('.c-channel_insights__date_heading span')
  .css('color')`,


`$('.c-channel_insights__date_heading::before')
  .css('background-color')`,


`$('#file_list_toggle_users')
  .css('color')`,


`$('#file_list_toggle_users.active:hover, #file_list_toggle_users:hover')
  .css('color')`,


`$('#file_list_toggle_users.active')
  .css('color')`,


`$('.file_list_item .icon, .file_reference .icon')
  .css('background')`,
`$('.file_list_item .icon, .file_reference .icon')
  .css('border')`,
`$('.file_list_item .icon, .file_reference .icon')
  .css('color')`,


`$('.filetype_button')
  .css('background')`,
`$('.filetype_button')
  .css('border')`,
`$('.filetype_button')
  .css('color')`,


`$('.filetype_button:hover')
  .css('background')`,


`$('.filetype_button:hover .file_download_label')
  .css('background')`,
`$('.filetype_button:hover .file_download_label')
  .css('color')`,


`$('.filetype_button .file_title')
  .css('color')`,


`$('.filetype_button .file_download_label')
  .css('background')`,
`$('.filetype_button .file_download_label')
  .css('border-top')`,


`$('a.filetype_button_web')
  .css('background')`,
`$('a.filetype_button_web')
  .css('border')`,
`$('a.filetype_button_web')
  .css('color')`,


`$('a.filetype_button_web .filetype_icon')
  .css('background-color')`,


`$('a.file_download_link')
  .css('color')`,


`$('a.file_download_link:hover')
  .css('color')`,


`$('a:hover .file_inline_icon')
  .css('color')`,


`$('a.gsheet img, a.pdf img')
  .css('background')`,


`$('html.no_touch a.filetype_button_web:hover')
  .css('border-color')`,


`$('html.no_touch a.filetype_button_web:hover .file_title')
  .css('color')`,


`$('.file_header_detailed')
  .css('color')`,


`$('.file_header_detailed .member')
  .css('color')`,


`$('.file_inline_icon')
  .css('color')`,


`$('.file_header .member')
  .css('color')`,


`$('.file_header .title')
  .css('color')`,


`$('.file_header .title a')
  .css('color')`,


`$('.file_header .title a:hover')
  .css('color')`,


`$('.flexpane_file_title .member, .flexpane_file_title .service_link')
  .css('color')`,


`$('.flexpane_file_title .title a, .flexpane_file_title .file_action_list a')
  .css('color')`,


`$('.flexpane_file_title .title a:hover, .flexpane_file_title .file_action_list a:hover')
  .css('color')`,


`$('.file_actions_cog')
  .css('color')`,


`$('.file_actions_cog:hover')
  .css('color')`,


`$('.file_list_item')
  .css('color')`,


`$('.file_list_item a')
  .css('color')`,


`$('.file_list_item a.member')
  .css('color')`,


`$('.file_list_item .bullet')
  .css('color')`,


`$('.file_list_item .icon')
  .css('background')`,
`$('.file_list_item .icon')
  .css('border-color')`,


`$('.file_list_item .ts_icon_comment')
  .css('color')`,


`$('.file_list_item .file_comment_link:hover')
  .css('color')`,


`$('.file_list_item .file_comment_link:hover .ts_icon_comment')
  .css('color')`,


`$('.file_list_item .title a')
  .css('color')`,


`$('.file_list_item .share_info .unshare_link')
  .css('color')`,


`$('.file_list_item .share_info .unshare_link:hover')
  .css('color')`,


`$('.file_list_item .actions a, .file_list_item .actions span')
  .css('background-color')`,
`$('.file_list_item .actions a, .file_list_item .actions span')
  .css('border')`,
`$('.file_list_item .actions a, .file_list_item .actions span')
  .css('color')`,


`$('.file_list_item .actions a:hover')
  .css('background-color')`,
`$('.file_list_item .actions a:hover')
  .css('border-color')`,
`$('.file_list_item .actions a:hover')
  .css('color')`,


`$('.file_list_item.post .preview, .file_list_item.space .preview')
  .css('color')`,


`$('.file_list_item #share_dialog, .file_list_item.active, .file_list_item:active, .file_list_item:hover')
  .css('background-color')`,
`$('.file_list_item #share_dialog, .file_list_item.active, .file_list_item:active, .file_list_item:hover')
  .css('border-color')`,


`$('.file_list_item #share_dialog .title a, .file_list_item.active .title a, .file_list_item:active .title a, .file_list_item:hover .title a')
  .css('color')`,


`$('.file_list_item #share_dialog .actions, .file_list_item.active .actions, .file_list_item:active .actions, .file_list_item:hover .actions')
  .css('background-color')`,


`$('.file_list_item #share_dialog .actions a, .file_list_item #share_dialog .actions span, .file_list_item.active .actions a, .file_list_item.active .actions span, .file_list_item:active .actions a, .file_list_item:active .actions span, .file_list_item:hover .actions a, .file_list_item:hover .actions span')
  .css('background-color')`,


`$('.unshare_link')
  .css('color')`,


`$('.unshare_link i::before')
  .css('color')`,


`$('.unshare_link i.ts_icon_minus_circle_small:hover::before')
  .css('color')`,


`$('.snippet_preview pre')
  .css('color')`,


`$('.file_preview_wrapper .file_preview')
  .css('background')`,


`$('.file_preview_wrapper .file_preview:hover')
  .css('background')`,


`$('#file_preview_container .file_meta')
  .css('color')`,


`$('.file_page_meta')
  .css('color')`,


`$('#file_page_preview img')
  .css('background')`,
`$('#file_page_preview img')
  .css('border')`,


`$('#file_page_preview img:hover')
  .css('background')`,


`$('.comment_meta')
  .css('color')`,


`$('.comment .special_formatting_quote .content')
  .css('color')`,


`$('.comment .member')
  .css('color')`,


`$('.comment_body')
  .css('color')`,


`$('.comment_actions')
  .css('color')`,


`$('.comment_actions:hover')
  .css('color')`,


`$('.icon_quote')
  .css('color')`,


`$('.edit_comment_form .texty_comment_input, .comment_form .texty_comment_input')
  .css('background')`,
`$('.edit_comment_form .texty_comment_input, .comment_form .texty_comment_input')
  .css('border-color')`,
`$('.edit_comment_form .texty_comment_input, .comment_form .texty_comment_input')
  .css('color')`,


`$('.edit_comment_form .texty_comment_input.focus, .edit_comment_form .texty_comment_input:hover, .comment_form .texty_comment_input.focus, .comment_form .texty_comment_input:hover')
  .css('border-color')`,


`$('.tab_container .star_item .message .actions .btn_icon, .tab_container .star_item .message .actions .star_jump, .tab_container .star_item ts-message .actions .btn_icon, .tab_container .star_item ts-message .actions .star_jump, .tab_container .file_list_item .actions .btn_icon, .tab_container .file_list_item .actions .star_jump, .tab_container .file_comment_item .actions .btn_icon, .tab_container .file_comment_item .actions .star_jump')
  .css('background-color')`,


`$('.tab_container .star_item .message .actions .btn::after, .tab_container .star_item ts-message .actions .btn::after, .tab_container .file_list_item .actions .btn::after, .tab_container .file_comment_item .actions .btn::after')
  .css('border-color')`,


`$('.tab_container .star_item ts-message .timestamp')
  .css('color')`,


`$('.tab_container .file_list_item:focus, .tab_container .file_list_item:hover')
  .css('background-color')`,
`$('.tab_container .file_list_item:focus, .tab_container .file_list_item:hover')
  .css('border-color')`,


`$('.tab_container .file_list_item .star')
  .css('color')`,


`$('.tab_container .file_list_item .contents .file_comment_link')
  .css('color')`,


`$('.tab_container .file_list_item .contents .file_comment_link .ts_icon')
  .css('color')`,


`$('.tab_container .file_list_item .contents .file_comment_link:focus, .tab_container .file_list_item .contents .file_comment_link:hover')
  .css('color')`,


`$('.tab_container .file_list_item .contents .file_comment_link:focus .ts_icon, .tab_container .file_list_item .contents .file_comment_link:hover .ts_icon')
  .css('color')`,


`$('.tab_container .file_list_item .contents .member, .tab_container .file_list_item .contents .service_link, .tab_container .file_list_item .contents .share_info, .tab_container .file_list_item .contents .time')
  .css('color')`,


`$('.tab_container .file_list_item .filetype_image')
  .css('background-color')`,


`$('.active .tab_container .file_list_item')
  .css('background-color')`,


`$('#user_groups_pane .mention')
  .css('background')`,
`$('#user_groups_pane .mention')
  .css('border')`,
`$('#user_groups_pane .mention')
  .css('border-radius')`,
`$('#user_groups_pane .mention')
  .css('padding')`,


`$('#user_groups_container .info_panel')
  .css('background')`,
`$('#user_groups_container .info_panel')
  .css('border')`,


`$('#user_groups_container .mention')
  .css('background-color')`,


`$('#user_groups_header .user_groups_search .icon_search')
  .css('color')`,


`$('#user_groups_header a.icon_close')
  .css('color')`,


`$('#user_groups_header a.icon_close:hover')
  .css('color')`,


`$('.user_group_item')
  .css('border-bottom')`,


`$('.user_group_item a')
  .css('color')`,


`$('#flex_contents .user_group_item:hover')
  .css('background-color')`,


`$('#flex_contents .user_group_item:hover h4')
  .css('color')`,


`$('#flex_contents .flexpane_tab_toolbar #user_group_edit')
  .css('background-color')`,


`$('#flex_contents .flexpane_tab_toolbar #user_group_edit.user_group_edit--flexpane .tab_action_button')
  .css('color')`,


`$('.user_group_invite_member_small .add_icon')
  .css('color')`,


`$('#user_group_member_invite_div .disabled .lfs_item.lfs_token')
  .css('background-color')`,
`$('#user_group_member_invite_div .disabled .lfs_item.lfs_token')
  .css('border-color')`,


`$('#flex_contents .subheading:not(.empty)#mentions_options')
  .css('background-color')`,
`$('#flex_contents .subheading:not(.empty)#mentions_options')
  .css('border-bottom-color')`,
`$('#flex_contents .subheading:not(.empty)#mentions_options')
  .css('color')`,


`$('.mention_day_container_div .day_divider::before')
  .css('background')`,
`$('.mention_day_container_div .day_divider::before')
  .css('border-color')`,


`$('#member_mentions h3 a')
  .css('color')`,


`$('.mention_rxn .mention_rxn_summary')
  .css('color')`,


`$('.mention_rxn .mention_rxn_summary .member_preview_link, .mention_rxn .mention_rxn_summary .mention_rxn_summary_members')
  .css('color')`,


`$('.search_message_result')
  .css('background')`,
`$('.search_message_result')
  .css('border-color')`,
`$('.search_message_result')
  .css('color')`,


`$('.search_message_result .search_message_result_meta')
  .css('color')`,


`$('.search_message_result .search_message_result_meta a')
  .css('color')`,


`$('.search_message_result .search_message_result_meta .date_links a')
  .css('color')`,


`$('.search_message_result_text .result_msg_format a')
  .css('color')`,


`$('span.match')
  .css('background')`,


`$('#search_filters .tab')
  .css('background')`,
`$('#search_filters .tab')
  .css('color')`,


`$('#search_filters .tab:hover')
  .css('border-bottom')`,


`$('#search_filters.files #filter_files, #search_filters.messages #filter_messages')
  .css('border-bottom')`,
`$('#search_filters.files #filter_files, #search_filters.messages #filter_messages')
  .css('color')`,


`$('#search_file_list_toggle_users.active:hover')
  .css('border')`,
`$('#search_file_list_toggle_users.active:hover')
  .css('color')`,


`$('.no_results')
  .css('color')`,


`$('#search_results_team .team_results_heading')
  .css('color')`,


`$('#search_results_team .team_result')
  .css('background-color')`,
`$('#search_results_team .team_result')
  .css('border-color')`,
`$('#search_results_team .team_result')
  .css('color')`,


`$('#search_results_team .team_result a')
  .css('color')`,


`$('#search_results_team .team_result:hover a')
  .css('color')`,


`$('#search_results_team .team_result a:hover')
  .css('color')`,


`$('#search_results_team .member_name')
  .css('color')`,


`$('.suggestion')
  .css('color')`,


`$('.suggestion.active, .suggestion:hover')
  .css('background')`,


`$('#paging_in_options .search_paging')
  .css('color')`,


`$('#search_results_items .search_paging')
  .css('color')`,


`$('.search_paging i.disabled')
  .css('color')`,


`$('.search_paging a')
  .css('color')`,


`$('.search_paging a:hover')
  .css('color')`,


`$('.search_sort_prefix')
  .css('color')`,


`$('.search_segmented_control')
  .css('border-color')`,
`$('.search_segmented_control')
  .css('color')`,


`$('.search_segmented_control:hover')
  .css('color')`,


`$('.search_segmented_control.active')
  .css('background')`,
`$('.search_segmented_control.active')
  .css('color')`,


`$('.search_result_with_extract')
  .css('background')`,
`$('.search_result_with_extract')
  .css('border-color')`,
`$('.search_result_with_extract')
  .css('box-shadow')`,


`$('.search_result_with_extract:hover')
  .css('border-color')`,


`$('.search_result_for_context::after')
  .css('background')`,


`$('.extract_expand_text, .extract_expand_icons')
  .css('color')`,


`$('.search_result_with_extract:hover .extract_expand_text, .search_result_with_extract:hover .extract_expand_icons')
  .css('color')`,


`$('.search_module_header')
  .css('color')`,


`$('.search_module_footer')
  .css('background-color')`,
`$('.search_module_footer')
  .css('border-bottom-color')`,
`$('.search_module_footer')
  .css('border-left-color')`,
`$('.search_module_footer')
  .css('border-right-color')`,


`$('.search_module_footer p')
  .css('color')`,


`$('.search_module_footer #see_more')
  .css('color')`,


`$('.search_module_footer #see_more a')
  .css('color')`,


`$('.search_module_footer .top_results_feedback a')
  .css('color')`,


`$('.search_module_footer ts-icon')
  .css('color')`,


`$('.top_results_search_message_result')
  .css('background-color')`,
`$('.top_results_search_message_result')
  .css('border-bottom-color')`,
`$('.top_results_search_message_result')
  .css('border-left-color')`,
`$('.top_results_search_message_result')
  .css('border-right-color')`,


`$('.top_results_search_message_result.duplicate')
  .css('background-color')`,


`$('.top_results_search_message_result .timestamp')
  .css('color')`,


`$('.top_results_search_message_result .channel')
  .css('color')`,


`$('.top_results_search_message_result .channel a')
  .css('color')`,


`$('.top_results_search_message_result .jump')
  .css('color')`,


`$('.top_results_search_message_result:hover')
  .css('border-color')`,
`$('.top_results_search_message_result:hover')
  .css('border-top')`,


`$('.top_results_search_message_result:first-child')
  .css('border-top')`,


`$('.sli_expert_search')
  .css('background-color')`,
`$('.sli_expert_search')
  .css('color')`,


`$('.sli_expert_search__result')
  .css('border-color')`,


`$('.sli_expert_search__result .app_preview_link, .sli_expert_search__result .member_preview_link')
  .css('color')`,


`$('.sli_expert_search__fg_face::before')
  .css('background-color')`,


`$('.sli_expert_search_cta')
  .css('border-color')`,


`$('.sli_expert_search_cta:hover')
  .css('border-color')`,


`$('.sli_expert_search_cta__text')
  .css('color')`,


`$('.sli_expert_search_cta__text:hover')
  .css('color')`,


`$('.sli_expert_search__plus_sign_overlay')
  .css('background-color')`,
`$('.sli_expert_search__plus_sign_overlay')
  .css('color')`,


`$('.sli_expert_search__arrow')
  .css('color')`,


`$('.sli_expert_search_cta:hover .sli_expert_search__arrow, .sli_expert_search_header:hover .sli_expert_search__arrow')
  .css('color')`,


`$('.sli_expert_search__partial_terms')
  .css('color')`,


`$('.feature_sli_file_search #search_filters.all #filter_all')
  .css('border-bottom-color')`,
`$('.feature_sli_file_search #search_filters.all #filter_all')
  .css('color')`,


`$('.feature_sli_file_search #search_results .file_list_item')
  .css('background-color')`,
`$('.feature_sli_file_search #search_results .file_list_item')
  .css('border-color')`,


`$('.feature_sli_file_search #search_results.all, .feature_sli_file_search #search_results.messages')
  .css('background-color')`,


`$('.feature_sli_file_search #search_results.all .search_message_result, .feature_sli_file_search #search_results.messages .search_message_result')
  .css('background-color')`,
`$('.feature_sli_file_search #search_results.all .search_message_result, .feature_sli_file_search #search_results.messages .search_message_result')
  .css('border-color')`,


`$('.feature_sli_file_search #search_results.all .search_result_with_extract.first_extract_message_in_group, .feature_sli_file_search #search_results.all .search_result_with_extract:first-child, .feature_sli_file_search #search_results.messages .search_result_with_extract.first_extract_message_in_group, .feature_sli_file_search #search_results.messages .search_result_with_extract:first-child')
  .css('border-top-color')`,


`$('.feature_sli_file_search #search_results.all .search_result_with_extract.first_extract_message_in_group:hover, .feature_sli_file_search #search_results.all .search_result_with_extract:first-child:hover, .feature_sli_file_search #search_results.messages .search_result_with_extract.first_extract_message_in_group:hover, .feature_sli_file_search #search_results.messages .search_result_with_extract:first-child:hover')
  .css('border-top-color')`,


`$('.feature_sli_file_search #search_results.all .search_result_with_extract.last_extract_message_in_group, .feature_sli_file_search #search_results.messages .search_result_with_extract.last_extract_message_in_group')
  .css('border-bottom-color')`,


`$('.feature_sli_file_search #search_results.all .search_result_with_extract.last_extract_message_in_group:hover, .feature_sli_file_search #search_results.messages .search_result_with_extract.last_extract_message_in_group:hover')
  .css('border-bottom-color')`,


`$('.feature_sli_file_search #search_results.all .search_message_result_meta, .feature_sli_file_search #search_results.messages .search_message_result_meta')
  .css('color')`,


`$('.feature_sli_file_search #search_results.all .channel_link, .feature_sli_file_search #search_results.messages .channel_link')
  .css('color')`,


`$('.feature_sli_file_search #search_results.all .sli_expert_search .channel_link, .feature_sli_file_search #search_results.messages .sli_expert_search .channel_link')
  .css('color')`,


`$('.feature_sli_file_search #search_results.all .new_jump_link, .feature_sli_file_search #search_results.messages .new_jump_link')
  .css('color')`,


`$('.feature_sli_file_search #search_results.all')
  .css('background-color')`,


`$('.feature_sli_file_search #search_results.all .top_search_results .search_message_result')
  .css('background-color')`,
`$('.feature_sli_file_search #search_results.all .top_search_results .search_message_result')
  .css('border-color')`,


`$('.feature_sli_file_search #search_results.all .top_search_results .search_message_result__channel a')
  .css('color')`,


`$('.feature_sli_file_search #search_results.all .sli_expert_search_cta')
  .css('border-color')`,


`$('.feature_sli_file_search #search_results.all .sli_expert_search_cta:hover')
  .css('border-color')`,


`$('.feature_sli_file_search #search_results.all .sli_expert_search__result')
  .css('border-color')`,


`$('.feature_sli_file_search #search_results.all .team_result')
  .css('background-color')`,
`$('.feature_sli_file_search #search_results.all .team_result')
  .css('border-color')`,


`$('.feature_sli_file_search #search_results.files')
  .css('background-color')`,


`$('.feature_sli_file_search #search_results.files #search_file_list_clear_filter, .feature_sli_file_search #search_results.files #search_file_list_heading')
  .css('color')`,


`$('.feature_sli_file_search #search_results_loading')
  .css('background-color')`,


`$('.feature_sli_file_search #search_results_container #search_options')
  .css('background-color')`,


`$('.feature_sli_file_search #search_results_container .heading')
  .css('background-color')`,


`$('#client-ui .file_list_item.file_list_item--redesign')
  .css('border-color')`,


`$('#client-ui .file_list_item.file_list_item--redesign .file_list_item__channel')
  .css('color')`,


`$('#client-ui .file_list_item.file_list_item--redesign .message_sender')
  .css('color')`,


`$('.p-shortcuts_flexpane__shortcut')
  .css('border-color')`,


`$('.p-shortcuts_flexpane__shortcut:last-of-type')
  .css('border-bottom-color')`,


`$('.p-shortcuts_flexpane__shortcut_hoverable .p-shortcuts_flexpane__shortcut_title')
  .css('color')`,


`$('.p-shortcuts_flexpane__shortcut_title')
  .css('color')`,


`$('.p-shortcuts_flexpane__title')
  .css('color')`,


`$('.p-shortcuts_flexpane__tip')
  .css('color')`,


`$('.p-shortcuts_flexpane__section_description')
  .css('color')`,


`$('.p-shortcuts_flexpane__sub_heading')
  .css('color')`,


`$('.c-keyboard_key')
  .css('background')`,
`$('.c-keyboard_key')
  .css('border-color')`,
`$('.c-keyboard_key')
  .css('box-shadow')`,
`$('.c-keyboard_key')
  .css('color')`,


`$('.tab_container .star_item .message .timestamp, .tab_container .star_item ts-message .timestamp')
  .css('color')`,


`$('#member_preview_scroller a:not(.member_name):not(.current_status_preset_option), .team_list_item a:not(.member_name):not(.current_status_preset_option)')
  .css('color')`,


`$('#member_preview_scroller a:not(.member_name):not(.current_status_preset_option):hover, .team_list_item a:not(.member_name):not(.current_status_preset_option):hover')
  .css('color')`,


`$('#member_preview_scroller .member_data_table a, #team_list .member_data_table a')
  .css('color')`,


`$('#member_preview_scroller .member_data_table a:hover, #team_list .member_data_table a:hover')
  .css('color')`,


`$('#member_preview_scroller a.member_action_button, #team_list a.member_action_button')
  .css('color')`,


`$('#member_preview_scroller a.member_action_button:hover, #team_list a.member_action_button:hover')
  .css('border-color')`,
`$('#member_preview_scroller a.member_action_button:hover, #team_list a.member_action_button:hover')
  .css('color')`,


`$('#member_preview_scroller .member_data_table tr, #member_preview_web_container .member_data_table tr, #team_list .member_data_table tr, .menu_member_header .member_data_table tr')
  .css('color')`,


`$('#member_preview_scroller .member_data_table a, #member_preview_web_container .member_data_table a, #team_list .member_data_table a, .menu_member_header .member_data_table a')
  .css('color')`,


`$('#member_preview_scroller .member_data_table a:hover, #member_preview_web_container .member_data_table a:hover, #team_list .member_data_table a:hover, .menu_member_header .member_data_table a:hover')
  .css('color')`,


`$('#member_preview_scroller .member_data_table .bot_label, #member_preview_web_container .member_data_table .bot_label, #team_list .member_data_table .bot_label, .menu_member_header .member_data_table .bot_label')
  .css('background')`,
`$('#member_preview_scroller .member_data_table .bot_label, #member_preview_web_container .member_data_table .bot_label, #team_list .member_data_table .bot_label, .menu_member_header .member_data_table .bot_label')
  .css('color')`,


`$('#member_preview_scroller')
  .css('background-color')`,


`$('#member_preview_scroller .member_data_table .current_status_cell .current_status_container .current_status_cover:hover')
  .css('border-color')`,


`$('#member_preview_scroller .member_data_table .current_status_cell .current_status_container:not(.active) .current_status_cover.without_status_set .current_status_placeholder')
  .css('color')`,


`$('#team_tab #member_preview_scroller')
  .css('background-color')`,


`$('#member_preview_scroller .member_details .member_name_and_presence .member_name, #member_preview_web_container .member_details .member_name_and_presence .member_name, .menu_member_header .member_details .member_name_and_presence .member_name')
  .css('color')`,


`$('#member_preview_scroller .member_details .member_title, #member_preview_web_container .member_details .member_title, .menu_member_header .member_details .member_title')
  .css('color')`,


`$('#member_preview_scroller .member_details .member_restriction, #member_preview_scroller .member_details .member_timezone_value, #member_preview_web_container .member_details .member_restriction, #member_preview_web_container .member_details .member_timezone_value, .menu_member_header .member_details .member_restriction, .menu_member_header .member_details .member_timezone_value')
  .css('color')`,


`$('#member_preview_scroller .member_details .member_restriction a, #member_preview_scroller .member_details .member_timezone_value a, #member_preview_web_container .member_details .member_restriction a, #member_preview_web_container .member_details .member_timezone_value a, .menu_member_header .member_details .member_restriction a, .menu_member_header .member_details .member_timezone_value a')
  .css('color')`,


`$('#member_preview_scroller .member_details .member_restriction a:hover, #member_preview_scroller .member_details .member_timezone_value a:hover, #member_preview_web_container .member_details .member_restriction a:hover, #member_preview_web_container .member_details .member_timezone_value a:hover, .menu_member_header .member_details .member_restriction a:hover, .menu_member_header .member_details .member_timezone_value a:hover')
  .css('color')`,


`$('#member_preview_scroller .member_details .member_restriction .ts_icon_question_circle:focus, #member_preview_scroller .member_details .member_restriction .ts_icon_question_circle:hover, #member_preview_scroller .member_details .member_timezone_value .ts_icon_question_circle:focus, #member_preview_scroller .member_details .member_timezone_value .ts_icon_question_circle:hover, #member_preview_web_container .member_details .member_restriction .ts_icon_question_circle:focus, #member_preview_web_container .member_details .member_restriction .ts_icon_question_circle:hover, #member_preview_web_container .member_details .member_timezone_value .ts_icon_question_circle:focus, #member_preview_web_container .member_details .member_timezone_value .ts_icon_question_circle:hover, .menu_member_header .member_details .member_restriction .ts_icon_question_circle:focus, .menu_member_header .member_details .member_restriction .ts_icon_question_circle:hover, .menu_member_header .member_details .member_timezone_value .ts_icon_question_circle:focus, .menu_member_header .member_details .member_timezone_value .ts_icon_question_circle:hover')
  .css('color')`,


`$('#member_preview_scroller .member_details_divider, #member_preview_web_container .member_details_divider, .menu_member_header .member_details_divider')
  .css('border-color')`,


`$('#disabled_members_tab a')
  .css('color')`,


`$('#disabled_members_tab a:hover')
  .css('background')`,
`$('#disabled_members_tab a:hover')
  .css('color')`,


`$('#disabled_members_tab.active a')
  .css('color')`,


`$('.team_list_item')
  .css('border-top')`,
`$('.team_list_item')
  .css('color')`,


`$('.team_list_item .member_name')
  .css('color')`,


`$('#client-ui .searchable_member_list .team_list_item a, #client-ui #team_list .team_list_item a, #member_preview_scroller .team_list_item a')
  .css('color')`,


`$('#client-ui .searchable_member_list .team_list_item.expanded, #client-ui #team_list .team_list_item.expanded, #member_preview_scroller .team_list_item.expanded')
  .css('border-color')`,


`$('#client-ui .searchable_member_list .team_list_item:hover, #client-ui #team_list .team_list_item:hover, #member_preview_scroller .team_list_item:hover')
  .css('border-color')`,


`$('#client-ui .searchable_member_list .team_list_item')
  .css('border-bottom-color')`,


`$('#client-ui .searchable_member_list .team_list_item:hover')
  .css('background')`,


`$('#convo_tab #convo_tab_btns .close_flexpane:focus, #convo_tab #convo_tab_btns .close_flexpane:hover')
  .css('color')`,


`$('#convo_tab textarea.message_input')
  .css('color')`,


`$('#reply_container .inline_message_input_container .message_input div, #reply_container .inline_message_input_container textarea, .reply_input_container .inline_message_input_container .message_input div, .reply_input_container .inline_message_input_container textarea')
  .css('border-color')`,
`$('#reply_container .inline_message_input_container .message_input div, #reply_container .inline_message_input_container textarea, .reply_input_container .inline_message_input_container .message_input div, .reply_input_container .inline_message_input_container textarea')
  .css('color')`,


`$('#reply_container .inline_message_input_container .message_input div:active, #reply_container .inline_message_input_container .message_input div:focus, #reply_container .inline_message_input_container textarea:active, #reply_container .inline_message_input_container textarea:focus, .reply_input_container .inline_message_input_container .message_input div:active, .reply_input_container .inline_message_input_container .message_input div:focus, .reply_input_container .inline_message_input_container textarea:active, .reply_input_container .inline_message_input_container textarea:focus')
  .css('border-color')`,


`$('#reply_container .reply_broadcast_buttons_container .reply_broadcast_label_container, .reply_input_container .reply_broadcast_buttons_container .reply_broadcast_label_container')
  .css('color')`,


`$('#reply_container .reply_broadcast_buttons_container .reply_broadcast_label_container ts-icon.ts_icon_question_circle, .reply_input_container .reply_broadcast_buttons_container .reply_broadcast_label_container ts-icon.ts_icon_question_circle')
  .css('color')`,


`$('#reply_container .reply_limited_in_general, .reply_input_container .reply_limited_in_general')
  .css('background')`,
`$('#reply_container .reply_limited_in_general, .reply_input_container .reply_limited_in_general')
  .css('color')`,


`$('#convo_container .convo_flexpane_divider')
  .css('border-top-color')`,
`$('#convo_container .convo_flexpane_divider')
  .css('color')`,


`$('#convo_container .convo_flexpane_divider .reply_count')
  .css('background')`,


`$('#convo_container ts-conversation ts-message.selected .message_content .thread_channel_link')
  .css('color')`,


`$('#convo_tab .message_input, #convo_tab textarea#msg_text')
  .css('color')`,


`$('#whats_new_tab p')
  .css('color')`,


`$('#whats_new_tab .flex_heading_controls label')
  .css('color')`,


`$('.c-member__display-name, .c-team__display-name, .c-usergroup__handle')
  .css('color')`,


`$('.c-member__current-status--small::before, .c-member__secondary-name--large+.c-member__current-status--large::before, .c-member__secondary-name--medium+.c-member__current-status--medium::before')
  .css('color')`,


`$('.c-member .external_team_badge')
  .css('background-color')`,
`$('.c-member .external_team_badge')
  .css('box-shadow')`,


`$('.c-member .external_team_badge.default')
  .css('background-color')`,
`$('.c-member .external_team_badge.default')
  .css('color')`,
`$('.c-member .external_team_badge.default')
  .css('text-shadow')`,


`$('.c-member .external_team_badge::after')
  .css('box-shadow')`,


`$('.c-member__name--small, .c-team__name--small, .c-usergroup__name--small')
  .css('color')`,


`$('.c-member--small .presence')
  .css('color')`,


`$('.c-member--small .team_image.icon_16')
  .css('border-color')`,


`$('.c-member--small .team_image.default')
  .css('background-color')`,
`$('.c-member--small .team_image.default')
  .css('color')`,
`$('.c-member--small .team_image.default')
  .css('text-shadow')`,


`$('.c-member--dark .c-member__current-status')
  .css('color')`,


`$('.c-member--dark .c-member__current-status::before')
  .css('color')`,


`$('.c-member--dark .c-member__name, .c-member--dark .c-member__secondary-name')
  .css('color')`,


`$('.c-member--dark .c-member__display-name, .c-member--dark .presence')
  .css('color')`,


`$('.c-member--medium')
  .css('color')`,


`$('.c-member--medium .presence')
  .css('color')`,


`$('.c-member__secondary-name--medium')
  .css('color')`,


`$('.c-member--large')
  .css('color')`,


`$('.c-member__display-name--large, .c-member__title--large')
  .css('color')`,


`$('.c-member__other-names--large')
  .css('color')`,


`$('.c-usergroup--small .c-usergroup__icon')
  .css('background-color')`,
`$('.c-usergroup--small .c-usergroup__icon')
  .css('color')`,


`$('.c-usergroup__not-in-channel-context--small')
  .css('color')`,


`$('.p-emoji_picker')
  .css('background')`,
`$('.p-emoji_picker')
  .css('color')`,


`$('.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="0"].key_selection')
  .css('background')`,


`$('.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="1"].key_selection')
  .css('background')`,


`$('.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="2"].key_selection')
  .css('background')`,


`$('.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="3"].key_selection')
  .css('background')`,


`$('.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="4"].key_selection')
  .css('background')`,


`$('.p-emoji_picker[data-using-keyboard="true"] .p-emoji_picker__list_item[data-color-index="5"].key_selection')
  .css('background')`,


`$('.p-emoji_picker__list_item')
  .css('text-shadow')`,


`$('.p-emoji_picker__list_item[data-color-index="0"]:hover, .p-emoji_picker__list_item[data-color-index="0"].key_selection')
  .css('background')`,


`$('.p-emoji_picker__list_item[data-color-index="1"]:hover, .p-emoji_picker__list_item[data-color-index="1"].key_selection')
  .css('background')`,


`$('.p-emoji_picker__list_item[data-color-index="2"]:hover, .p-emoji_picker__list_item[data-color-index="2"].key_selection')
  .css('background')`,


`$('.p-emoji_picker__list_item[data-color-index="3"]:hover, .p-emoji_picker__list_item[data-color-index="3"].key_selection')
  .css('background')`,


`$('.p-emoji_picker__list_item[data-color-index="4"]:hover, .p-emoji_picker__list_item[data-color-index="4"].key_selection')
  .css('background')`,


`$('.p-emoji_picker__list_item[data-color-index="5"]:hover, .p-emoji_picker__list_item[data-color-index="5"].key_selection')
  .css('background')`,


`$('.p-emoji_picker__heading, .p-emoji_picker__list_container, .p-emoji_picker__input_container')
  .css('background')`,


`$('.p-emoji_picker__group_tabs')
  .css('border-bottom-color')`,


`$('.p-emoji_picker__group_tab')
  .css('color')`,


`$('.p-emoji_picker__group_tab:hover')
  .css('background')`,
`$('.p-emoji_picker__group_tab:hover')
  .css('color')`,


`$('.p-emoji_picker__group_tab--active')
  .css('background')`,
`$('.p-emoji_picker__group_tab--active')
  .css('border-bottom-color')`,
`$('.p-emoji_picker__group_tab--active')
  .css('color')`,


`$('.p-emoji_picker__icon_search')
  .css('color')`,


`$('.p-emoji_picker__content:hover .p-emoji_picker__skintone_btn_container')
  .css('background')`,
`$('.p-emoji_picker__content:hover .p-emoji_picker__skintone_btn_container')
  .css('border-color')`,


`$('.p-emoji_picker__skintone_options')
  .css('background')`,


`$('.p-emoji_picker__tip i, .p-emoji_picker__no_results i')
  .css('color')`,


`$('.p-emoji_picker__tip')
  .css('color')`,


`$('.p-emoji_picker__no_results')
  .css('color')`,


`$('.p-emoji_picker__preview_text')
  .css('background')`,
`$('.p-emoji_picker__preview_text')
  .css('color')`,


`$('.p-emoji_picker__footer')
  .css('background')`,
`$('.p-emoji_picker__footer')
  .css('border-top-color')`,


`$('.p-emoji_picker__footer .p-emoji_picker__heading')
  .css('background')`,


`$('.p-emoji_picker__emoji_deluxe_label')
  .css('color')`,


`$('input[type="text"].p-emoji_picker__input:focus')
  .css('border-color')`,
`$('input[type="text"].p-emoji_picker__input:focus')
  .css('box-shadow')`,


`$('#message_edit_form .current_status_empty_emoji, #message_edit_form .current_status_empty_emoji_cover, #message_edit_form .emo_menu, #msg_form .current_status_empty_emoji, #msg_form .current_status_empty_emoji_cover, #msg_form .emo_menu, .current_status_container .current_status_empty_emoji, .current_status_container .current_status_empty_emoji_cover, .current_status_container .emo_menu, .current_status_input_container .current_status_empty_emoji, .current_status_input_container .current_status_empty_emoji_cover, .current_status_input_container .emo_menu, .inline_message_input_container .current_status_empty_emoji, .inline_message_input_container .current_status_empty_emoji_cover, .inline_message_input_container .emo_menu, .share_channel_modal_contents .current_status_empty_emoji, .share_channel_modal_contents .current_status_empty_emoji_cover, .share_channel_modal_contents .emo_menu')
  .css('color')`,


`$('#message_edit_form .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji, #msg_form .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji, .current_status_container .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji, .current_status_input_container .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji, .inline_message_input_container .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji, .share_channel_modal_contents .current_status_input.focus~.current_status_emoji_picker .current_status_empty_emoji')
  .css('color')`,


`$('#message_edit_form #msg_input.focus~#primary_file_button:not(:hover):not(.active), #message_edit_form #msg_input.focus~.emo_menu, #message_edit_form #msg_input:focus~#primary_file_button:not(:hover):not(.active), #message_edit_form #msg_input:focus~.emo_menu, #msg_form #msg_input.focus~#primary_file_button:not(:hover):not(.active), #msg_form #msg_input.focus~.emo_menu, #msg_form #msg_input:focus~#primary_file_button:not(:hover):not(.active), #msg_form #msg_input:focus~.emo_menu, .current_status_container #msg_input.focus~#primary_file_button:not(:hover):not(.active), .current_status_container #msg_input.focus~.emo_menu, .current_status_container #msg_input:focus~#primary_file_button:not(:hover):not(.active), .current_status_container #msg_input:focus~.emo_menu, .current_status_input_container #msg_input.focus~#primary_file_button:not(:hover):not(.active), .current_status_input_container #msg_input.focus~.emo_menu, .current_status_input_container #msg_input:focus~#primary_file_button:not(:hover):not(.active), .current_status_input_container #msg_input:focus~.emo_menu, .inline_message_input_container #msg_input.focus~#primary_file_button:not(:hover):not(.active), .inline_message_input_container #msg_input.focus~.emo_menu, .inline_message_input_container #msg_input:focus~#primary_file_button:not(:hover):not(.active), .inline_message_input_container #msg_input:focus~.emo_menu, .share_channel_modal_contents #msg_input.focus~#primary_file_button:not(:hover):not(.active), .share_channel_modal_contents #msg_input.focus~.emo_menu, .share_channel_modal_contents #msg_input:focus~#primary_file_button:not(:hover):not(.active), .share_channel_modal_contents #msg_input:focus~.emo_menu')
  .css('color')`,


`$('#message_edit_form .message_input:focus~#primary_file_button:not(:hover):not(.active), #message_edit_form .message_input:focus~.emo_menu, #msg_form .message_input:focus~#primary_file_button:not(:hover):not(.active), #msg_form .message_input:focus~.emo_menu, .current_status_container .message_input:focus~#primary_file_button:not(:hover):not(.active), .current_status_container .message_input:focus~.emo_menu, .current_status_input_container .message_input:focus~#primary_file_button:not(:hover):not(.active), .current_status_input_container .message_input:focus~.emo_menu, .inline_message_input_container .message_input:focus~#primary_file_button:not(:hover):not(.active), .inline_message_input_container .message_input:focus~.emo_menu, .share_channel_modal_contents .message_input:focus~#primary_file_button:not(:hover):not(.active), .share_channel_modal_contents .message_input:focus~.emo_menu')
  .css('color')`,


`$('.current_status_emoji_picker')
  .css('border-right-color')`,


`$('.current_status_input_for_team_menu .current_status_presets')
  .css('border-top')`,


`$('.current_status_input_for_team_menu .current_status_presets .current_status_presets_section_header .header_label')
  .css('color')`,


`$('.rxn')
  .css('background')`,
`$('.rxn')
  .css('border')`,


`$('.rxn.active, .rxn:hover')
  .css('border-color')`,


`$('.rxn.active .emoji_rxn_count, .rxn:hover .emoji_rxn_count')
  .css('color')`,


`$('.rxn.user_reacted')
  .css('background-color')`,
`$('.rxn.user_reacted')
  .css('border-color')`,


`$('.rxn.user_reacted .emoji_rxn_count')
  .css('color')`,


`$('.rxn .emoji_rxn_count')
  .css('color')`,


`$('.rxn.menu_rxn .ts_icon')
  .css('color')`,


`$('.modal')
  .css('background-color')`,
`$('.modal')
  .css('border')`,
`$('.modal')
  .css('box-shadow')`,


`$('.modal .close, .modal label')
  .css('color')`,


`$('.modal_input_note, .modal_input_note_full_width, .input_note_special')
  .css('color')`,


`$('.modal-footer')
  .css('background')`,
`$('.modal-footer')
  .css('border-top')`,
`$('.modal-footer')
  .css('box-shadow')`,


`$('.modal-header')
  .css('background')`,
`$('.modal-header')
  .css('border-bottom')`,
`$('.modal-header')
  .css('color')`,


`$('.modal-backdrop')
  .css('background-color')`,


`$('.close')
  .css('color')`,
`$('.close')
  .css('text-shadow')`,


`$('#fs_modal_bg')
  .css('background')`,


`$('#fs_modal')
  .css('background')`,


`$('#fs_modal h1, #fs_modal h2, #fs_modal h3, #fs_modal h4, #fs_modal h5, #fs_modal h6')
  .css('color')`,


`$('#fs_modal #fs_modal_sidebar a')
  .css('color')`,


`$('#fs_modal #fs_modal_sidebar a:hover')
  .css('background')`,


`$('#fs_modal #fs_modal_sidebar a.active')
  .css('background')`,
`$('#fs_modal #fs_modal_sidebar a.active')
  .css('color')`,
`$('#fs_modal #fs_modal_sidebar a.active')
  .css('text-shadow')`,


`$('#fs_modal .fs_modal_btn')
  .css('color')`,


`$('#fs_modal .fs_modal_btn:hover')
  .css('background')`,
`$('#fs_modal .fs_modal_btn:hover')
  .css('color')`,


`$('#fs_modal .fs_modal_btn:active')
  .css('background')`,
`$('#fs_modal .fs_modal_btn:active')
  .css('color')`,


`$('#fs_modal.fs_modal_header .fs_modal_btn:active')
  .css('color')`,


`$('#fs_modal #fs_modal_footer')
  .css('background-color')`,


`$('.p-apps_browser__apps_list--loading::before')
  .css('background-color')`,


`$('.p-apps_browser__category_section--tutorial .p-apps_browser__app')
  .css('border-color')`,
`$('.p-apps_browser__category_section--tutorial .p-apps_browser__app')
  .css('box-shadow')`,


`$('.p-apps_browser__category_section--tutorial .p-apps_browser__app--selected')
  .css('background')`,
`$('.p-apps_browser__category_section--tutorial .p-apps_browser__app--selected')
  .css('box-shadow')`,


`$('.p-apps_browser__category_header')
  .css('background')`,
`$('.p-apps_browser__category_header')
  .css('color')`,


`$('.p-apps_browser__app')
  .css('border-top-color')`,


`$('.p-apps_browser__app--selected')
  .css('background')`,
`$('.p-apps_browser__app--selected')
  .css('border-color')`,


`$('.p-apps_browser__app_info')
  .css('color')`,


`$('.p-apps_browser__browse_apps, .p-apps_browser__app_action')
  .css('background-color')`,
`$('.p-apps_browser__browse_apps, .p-apps_browser__app_action')
  .css('border-color')`,
`$('.p-apps_browser__browse_apps, .p-apps_browser__app_action')
  .css('color')`,


`$('.p-apps_browser__browse_apps:hover, .p-apps_browser__browse_apps:focus, .p-apps_browser__app_action:hover, .p-apps_browser__app_action:focus')
  .css('background-color')`,
`$('.p-apps_browser__browse_apps:hover, .p-apps_browser__browse_apps:focus, .p-apps_browser__app_action:hover, .p-apps_browser__app_action:focus')
  .css('color')`,


`$('.p-apps_browser__browse_apps:active, .p-apps_browser__app_action:active')
  .css('box-shadow')`,


`$('.p-apps_browser__app_description')
  .css('color')`,


`$('#fs_modal.p-apps_browser_modal .contents_container .contents .links_container a')
  .css('color')`,


`$('#fs_modal.p-apps_browser_modal .contents_container .contents .links_container a:active, #fs_modal.p-apps_browser_modal .contents_container .contents .links_container a:hover, #fs_modal.p-apps_browser_modal .contents_container .contents .links_container a:visited')
  .css('color')`,


`$('#incoming_call')
  .css('background-color')`,
`$('#incoming_call')
  .css('color')`,


`$('#fs_modal.channel_options_modal .channel_options_header')
  .css('border-bottom-color')`,


`$('#fs_modal.channel_options_modal .convert_to_shared label')
  .css('color')`,


`$('#fs_modal.channel_options_modal .channel_option_item')
  .css('border-top-color')`,


`$('#fs_modal.channel_options_modal .channel_option_item .channel_option_open')
  .css('color')`,


`$('#fs_modal.channel_options_modal .channel_option_item:hover')
  .css('background')`,
`$('#fs_modal.channel_options_modal .channel_option_item:hover')
  .css('border-color')`,


`$('#channel_invite_container .lfs_list_container .lfs_item')
  .css('border-top-color')`,


`$('#channel_invite_container .lfs_list_container .lfs_item.active')
  .css('border-color')`,


`$('#channel_invite_container.page_needs_enterprise .channel_invite_row')
  .css('border-top-color')`,


`$('#channel_invite_container.page_needs_enterprise .channel_invite_row.disabled')
  .css('color')`,


`$('#channel_invite_modal #channel_invite_container:not(.keyboard_active).not_scrolling .channel_invite_row:not(.disabled):hover, #channel_invite_modal .channel_invite_row.highlighted:not(.disabled)')
  .css('background')`,
`$('#channel_invite_modal #channel_invite_container:not(.keyboard_active).not_scrolling .channel_invite_row:not(.disabled):hover, #channel_invite_modal .channel_invite_row.highlighted:not(.disabled)')
  .css('border-color')`,


`$('#channel_prefs_dialog')
  .css('color')`,


`$('.channel_prefs_modal_header')
  .css('color')`,


`$('.channel_prefs_body__section_header_title')
  .css('color')`,


`$('.channel_prefs_body__section_header_icon::before')
  .css('color')`,


`$('.channel_prefs_body__mute_help_text')
  .css('color')`,


`$('.channel_prefs_notifications_table')
  .css('border-bottom-color')`,
`$('.channel_prefs_notifications_table')
  .css('color')`,


`$('.channel_prefs_notifications_table__large_cell, .channel_prefs_notifications_table__small_cell, .channel_prefs_notifications_table__row_title')
  .css('border-bottom-color')`,


`$('.channel_prefs__muting_checkbox_label')
  .css('color')`,


`$('.channel_prefs__muting_checkbox_label:not(.subtle_silver)')
  .css('color')`,


`$('.notification_prefs_icon::before')
  .css('color')`,


`$('.channel_modal_header')
  .css('color')`,


`$('#channel_browser .channel_browser_row')
  .css('border-top')`,
`$('#channel_browser .channel_browser_row')
  .css('color')`,


`$('#channel_browser .channel_browser_row_header')
  .css('color')`,


`$('#channel_browser .channel_browser_creator_name')
  .css('color')`,


`$('#channel_browser .channel_browser_open, #channel_browser .channel_browser_preview')
  .css('color')`,


`$('#channel_browser #channel_list_container:not(.keyboard_active).not_scrolling .channel_browser_row:hover, #channel_browser .channel_browser_row.highlighted')
  .css('background')`,
`$('#channel_browser #channel_list_container:not(.keyboard_active).not_scrolling .channel_browser_row:hover, #channel_browser .channel_browser_row.highlighted')
  .css('border')`,


`$('#channel_browser .channel_browser_divider')
  .css('background')`,
`$('#channel_browser .channel_browser_divider')
  .css('color')`,


`$('#channel_browser .channel_browser_sort_container::after')
  .css('color')`,


`$('.channel_invite_member .add_icon, .channel_invite_member_small .add_icon')
  .css('color')`,


`$('.channel_invite_member .name_container .not_in_token, .channel_invite_member_small .name_container .not_in_token')
  .css('color')`,


`$('.channel_invite_member .invite_user_group_avatar, .channel_invite_member_small .invite_user_group_avatar')
  .css('background-color')`,
`$('.channel_invite_member .invite_user_group_avatar, .channel_invite_member_small .invite_user_group_avatar')
  .css('color')`,


`$('#invite_members_container .lfs_input_container')
  .css('background')`,


`$('#notifications_not_working p.highlight_yellow_bg a')
  .css('color')`,


`$('#im_browser .im_browser_row')
  .css('border-top')`,


`$('#im_browser .im_browser_row.multiparty .member_image+.member_image:not(.ra):not(.ura)')
  .css('border')`,


`$('#im_browser .im_browser_row .im_unread_cnt')
  .css('background')`,
`$('#im_browser .im_browser_row .im_unread_cnt')
  .css('color')`,


`$('#im_browser .im_browser_row.disabled')
  .css('color')`,


`$('#im_browser #im_list_container:not(.keyboard_active).not_scrolling .im_browser_row:not(.disabled_dm):hover, #im_browser #im_browser .im_browser_row.highlighted')
  .css('background')`,
`$('#im_browser #im_list_container:not(.keyboard_active).not_scrolling .im_browser_row:not(.disabled_dm):hover, #im_browser #im_browser .im_browser_row.highlighted')
  .css('border')`,


`$('#im_browser_tokens')
  .css('background')`,
`$('#im_browser_tokens')
  .css('border')`,


`$('#im_browser_tokens.active')
  .css('border-color')`,
`$('#im_browser_tokens.active')
  .css('box-shadow')`,


`$('#im_browser_tokens .member_token')
  .css('background')`,
`$('#im_browser_tokens .member_token')
  .css('border')`,
`$('#im_browser_tokens .member_token')
  .css('color')`,


`$('#im_browser_tokens .member_token.ra')
  .css('background')`,


`$('.fs_modal_file_viewer_header')
  .css('background-color')`,
`$('.fs_modal_file_viewer_header')
  .css('box-shadow')`,


`$('.fs_modal_file_viewer_header .btn')
  .css('color')`,


`$('.fs_modal_file_viewer_header .star')
  .css('color')`,


`$('.fs_modal_file_viewer_header .control_btn, .fs_modal_file_viewer_header a.control_btn')
  .css('color')`,


`$('.fs_modal_file_viewer_header .control_btn:link, .fs_modal_file_viewer_header .control_btn:visited, .fs_modal_file_viewer_header a.control_btn:link, .fs_modal_file_viewer_header a.control_btn:visited')
  .css('color')`,


`$('.fs_modal_file_viewer_header .control_btn:focus, .fs_modal_file_viewer_header .control_btn:hover, .fs_modal_file_viewer_header a.control_btn:focus, .fs_modal_file_viewer_header a.control_btn:hover')
  .css('color')`,


`$('.fs_modal_file_viewer_header .control_btn.active, .fs_modal_file_viewer_header .control_btn:active, .fs_modal_file_viewer_header a.control_btn.active, .fs_modal_file_viewer_header a.control_btn:active')
  .css('background')`,


`$('.fs_modal_file_viewer_header .file_size, .fs_modal_file_viewer_header .muted_tooltip_info')
  .css('color')`,


`$('.fs_modal_file_viewer_header .close_btn::after')
  .css('border-right')`,


`$('.fs_modal_file_viewer_content .viewer')
  .css('background-color')`,
`$('.fs_modal_file_viewer_content .viewer')
  .css('color')`,


`$('.fs_modal_file_viewer_content .viewer .next_btn ts-icon, .fs_modal_file_viewer_content .viewer .previous_btn ts-icon')
  .css('background')`,
`$('.fs_modal_file_viewer_content .viewer .next_btn ts-icon, .fs_modal_file_viewer_content .viewer .previous_btn ts-icon')
  .css('box-shadow')`,


`$('.fs_modal_file_viewer_content .viewer .next_btn:focus:not([disabled]), .fs_modal_file_viewer_content .viewer .next_btn:hover:not([disabled]), .fs_modal_file_viewer_content .viewer .previous_btn:focus:not([disabled]), .fs_modal_file_viewer_content .viewer .previous_btn:hover:not([disabled])')
  .css('background')`,
`$('.fs_modal_file_viewer_content .viewer .next_btn:focus:not([disabled]), .fs_modal_file_viewer_content .viewer .next_btn:hover:not([disabled]), .fs_modal_file_viewer_content .viewer .previous_btn:focus:not([disabled]), .fs_modal_file_viewer_content .viewer .previous_btn:hover:not([disabled])')
  .css('color')`,


`$('.fs_modal_file_viewer_content .viewer .next_btn[disabled]:focus, .fs_modal_file_viewer_content .viewer .next_btn[disabled]:hover, .fs_modal_file_viewer_content .viewer .previous_btn[disabled]:focus, .fs_modal_file_viewer_content .viewer .previous_btn[disabled]:hover')
  .css('color')`,


`$('.fs_modal_file_viewer_content .aside_panel')
  .css('background-color')`,
`$('.fs_modal_file_viewer_content .aside_panel')
  .css('box-shadow')`,


`$('.fs_modal_file_viewer_content .comment_header')
  .css('background-color')`,
`$('.fs_modal_file_viewer_content .comment_header')
  .css('border-bottom')`,


`$('.fs_modal_file_viewer_content .no_comment')
  .css('background-color')`,
`$('.fs_modal_file_viewer_content .no_comment')
  .css('color')`,


`$('.fs_modal_file_viewer_content .aside_close_btn')
  .css('color')`,


`$('.fs_modal_file_viewer_content #file_comment')
  .css('color')`,


`$('#file_comment_textarea.texty_comment_input')
  .css('background')`,
`$('#file_comment_textarea.texty_comment_input')
  .css('border-color')`,
`$('#file_comment_textarea.texty_comment_input')
  .css('color')`,


`$('#file_comment_textarea.texty_comment_input.focus, #file_comment_textarea.texty_comment_input:hover')
  .css('border-color')`,


`$('#fs_modal.help_modal #fs_modal_footer .help_modal_status #no_open_issues')
  .css('color')`,


`$('#fs_modal.help_modal .help_modal_header')
  .css('background-color')`,
`$('#fs_modal.help_modal .help_modal_header')
  .css('border-color')`,


`$('#fs_modal.help_modal .help_modal_header a')
  .css('color')`,


`$('#fs_modal.help_modal .help_modal_divider')
  .css('color')`,


`$('#fs_modal.help_modal .help_modal_article_row')
  .css('border-top')`,


`$('#fs_modal.help_modal .help_modal_article_row .channel_browser_open')
  .css('color')`,


`$('#fs_modal.help_modal #help_modal_list_container:not(.keyboard_active).not_scrolling .help_modal_article_row:hover, #fs_modal.help_modal .help_modal_article_row.highlighted')
  .css('background-color')`,
`$('#fs_modal.help_modal #help_modal_list_container:not(.keyboard_active).not_scrolling .help_modal_article_row:hover, #fs_modal.help_modal .help_modal_article_row.highlighted')
  .css('border-color')`,


`$('.admin_invites_account_type_option')
  .css('border-bottom')`,


`$('.admin_invites_account_type_option p')
  .css('color')`,


`$('.admin_invites_account_type_option .option_arrow')
  .css('color')`,


`$('.admin_invites_account_type_option:hover:not(.disabled) h3')
  .css('color')`,


`$('.admin_invites_account_type_option.disabled .account_type_disabled_hover')
  .css('background')`,


`$('.admin_invites_account_type_option.disabled:hover .account_type_disabled_hover')
  .css('background')`,


`$('.admin_invite_row .delete_row, .admin_invite_row .hide_custom_message, .admin_invites_custom_message_container .delete_row, .admin_invites_custom_message_container .hide_custom_message')
  .css('color')`,


`$('.admin_invite_row .delete_row:hover, .admin_invite_row .hide_custom_message:hover, .admin_invites_custom_message_container .delete_row:hover, .admin_invites_custom_message_container .hide_custom_message:hover')
  .css('color')`,


`$('.admin_invite_row.delete_highlight, .admin_invites_custom_message_container.delete_highlight')
  .css('background')`,


`$('#admin_invites_channel_picker_container')
  .css('border-bottom')`,


`$('#admin_invites_add_row')
  .css('background')`,
`$('#admin_invites_add_row')
  .css('border')`,


`$('#admin_invites_workflow .lazy_filter_select .lfs_input_container')
  .css('background-color')`,


`$('#channel_invite_tokens')
  .css('background-color')`,
`$('#channel_invite_tokens')
  .css('border-color')`,


`$('#channel_invite_tokens.active')
  .css('border-color')`,
`$('#channel_invite_tokens.active')
  .css('box-shadow')`,


`$('#channel_invite_tokens .member_token')
  .css('background')`,
`$('#channel_invite_tokens .member_token')
  .css('color')`,


`$('#channel_invite_tokens .member_token.ra')
  .css('background')`,


`$('#admin_invites_alert')
  .css('background')`,
`$('#admin_invites_alert')
  .css('border-color')`,


`$('.channel_invite_member .add_icon, .channel_invite_member_small .add_icon, .channel_invite_pending_user_small .add_icon')
  .css('color')`,


`$('.channel_invite_member .invite_user_group_avatar, .channel_invite_member_small .invite_user_group_avatar, .channel_invite_pending_user_small .invite_user_group_avatar')
  .css('background-color')`,
`$('.channel_invite_member .invite_user_group_avatar, .channel_invite_member_small .invite_user_group_avatar, .channel_invite_pending_user_small .invite_user_group_avatar')
  .css('color')`,


`$('#shortcuts_dialog')
  .css('background')`,
`$('#shortcuts_dialog')
  .css('text-shadow')`,


`$('#shortcuts_dialog.modal .modal-body, #shortcuts_dialog.modal h1, #shortcuts_dialog.modal h3')
  .css('color')`,


`$('#shortcuts_dialog.modal ul ul')
  .css('border-left-color')`,


`$('#shortcuts_dialog.modal .info_block')
  .css('color')`,


`$('#shortcuts_dialog.modal .close')
  .css('background')`,
`$('#shortcuts_dialog.modal .close')
  .css('border-color')`,
`$('#shortcuts_dialog.modal .close')
  .css('box-shadow')`,
`$('#shortcuts_dialog.modal .close')
  .css('color')`,


`$('#shortcuts_dialog.modal .close:hover')
  .css('box-shadow')`,


`$('#fs_modal.prefs_modal label.sound_option:hover:not(.disabled) ts-icon')
  .css('color')`,


`$('#fs_modal.prefs_modal #prefs_sidebar .theme_thumb')
  .css('box-shadow')`,


`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_themes_customize .custom_theme_label')
  .css('border')`,


`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_themes_customize .custom_theme_label .color_swatch')
  .css('border')`,


`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_themes_customize .colpick')
  .css('background')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_themes_customize .colpick')
  .css('border')`,


`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('background')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('border-radius')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('content')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('display')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('font-size')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('line-height')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('margin')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('padding')`,
`$('#fs_modal.prefs_modal #prefs_sidebar #prefs_sidebar_theme::after')
  .css('width')`,


`$('#fs_modal.prefs_modal legend')
  .css('color')`,


`$('#fs_modal.prefs_modal .global_notification_block')
  .css('background')`,
`$('#fs_modal.prefs_modal .global_notification_block')
  .css('border-color')`,


`$('#fs_modal.prefs_modal .global_notification_block.selected')
  .css('background')`,
`$('#fs_modal.prefs_modal .global_notification_block.selected')
  .css('border-color')`,


`$('#fs_modal.prefs_modal .channel_overrides_row')
  .css('border-top-color')`,


`$('#fs_modal.prefs_modal .channel_overrides_row:hover')
  .css('background')`,
`$('#fs_modal.prefs_modal .channel_overrides_row:hover')
  .css('border-color')`,


`$('#fs_modal.prefs_modal .channel_overrides_row .channel_overrides_summary')
  .css('color')`,


`$('#fs_modal.prefs_modal .notification_example.mac')
  .css('background')`,
`$('#fs_modal.prefs_modal .notification_example.mac')
  .css('box-shadow')`,


`$('#fs_modal.prefs_modal .notification_example.linux, #fs_modal.prefs_modal .notification_example.windows')
  .css('background')`,
`$('#fs_modal.prefs_modal .notification_example.linux, #fs_modal.prefs_modal .notification_example.windows')
  .css('color')`,


`$('#fs_modal.prefs_modal .badge_example')
  .css('background')`,


`$('#fs_modal.prefs_modal .message_theme_preview')
  .css('border-bottom-color')`,
`$('#fs_modal.prefs_modal .message_theme_preview')
  .css('border-top-color')`,


`$('#fs_modal.prefs_modal .display_real_names_block_sample')
  .css('background')`,


`$('.sidebar_menu_list_item')
  .css('border')`,
`$('.sidebar_menu_list_item')
  .css('color')`,


`$('.sidebar_menu_list_item.is_active')
  .css('background-color')`,
`$('.sidebar_menu_list_item.is_active')
  .css('color')`,
`$('.sidebar_menu_list_item.is_active')
  .css('text-shadow')`,


`$('.sidebar_menu_list_item:not(.is_active):hover')
  .css('background-color')`,


`$('.jumbomoji_pref_disabled')
  .css('color')`,


`$('.jumbomoji_disabled_note')
  .css('color')`,


`$('#edit_team_profile_container input:disabled, #edit_team_profile_container select:disabled')
  .css('background')`,
`$('#edit_team_profile_container input:disabled, #edit_team_profile_container select:disabled')
  .css('border')`,


`$('#edit_team_profile_container .lazy_filter_select.disabled')
  .css('background')`,


`$('#edit_team_profile_container .lazy_filter_select.disabled input')
  .css('background')`,


`$('#edit_team_profile_add .row, #edit_team_profile_list .row')
  .css('border-top')`,


`$('#edit_team_profile_list .row:nth-last-child(2):hover')
  .css('border-color')`,


`$('#edit_team_profile_list .row:nth-child(n+5).active, #edit_team_profile_list .row:nth-child(n+5):hover')
  .css('background')`,
`$('#edit_team_profile_list .row:nth-child(n+5).active, #edit_team_profile_list .row:nth-child(n+5):hover')
  .css('border')`,


`$('#edit_team_profile_list .row:nth-child(n+5).active .edit_team_profile_list_controls i.ts_icon_cog_o')
  .css('color')`,


`$('#edit_team_profile_list .edit_team_profile_list_controls i')
  .css('color')`,


`$('#edit_team_profile_list .edit_team_profile_list_controls i.ts_icon_cog_o:hover')
  .css('color')`,


`$('#edit_team_profile_list .edit_team_profile_list_controls i.ts_icon_grabby_patty:hover')
  .css('color')`,


`$('#edit_team_profile_list .sortable-placeholder::before')
  .css('border-top')`,


`$('#edit_team_profile_add .row:last-child')
  .css('border-bottom')`,


`$('#edit_team_profile_add .row:not(.header_row):hover')
  .css('background')`,
`$('#edit_team_profile_add .row:not(.header_row):hover')
  .css('border')`,


`$('#edit_team_profile_add .row:not(.header_row):hover .col:first-child')
  .css('color')`,


`$('#edit_team_profile_add .row:not(.header_row):hover i')
  .css('border-color')`,
`$('#edit_team_profile_add .row:not(.header_row):hover i')
  .css('color')`,


`$('#edit_team_profile_add i')
  .css('color')`,


`$('#edit_team_profile_edit .profile_field_preview_protector label.select::after, #edit_team_profile_edit .profile_field_preview_protector label.select:hover::after')
  .css('color')`,


`$('#edit_team_profile_edit .row.option_row.show_remove_action i')
  .css('border')`,


`$('#edit_team_profile_edit .row.option_row.show_remove_action i:hover')
  .css('background-color')`,
`$('#edit_team_profile_edit .row.option_row.show_remove_action i:hover')
  .css('border-color')`,
`$('#edit_team_profile_edit .row.option_row.show_remove_action i:hover')
  .css('color')`,


`$('#edit_team_profile_edit .row i')
  .css('border')`,
`$('#edit_team_profile_edit .row i')
  .css('color')`,


`$('#edit_team_profile_custom .row .col .profile_field_preview')
  .css('background')`,
`$('#edit_team_profile_custom .row .col .profile_field_preview')
  .css('border')`,


`$('#edit_team_profile_custom .row .col .profile_field_preview:active, #edit_team_profile_custom .row .col .profile_field_preview:hover')
  .css('border-color')`,


`$('#edit_team_profile_custom .row .col .profile_field_preview:active span, #edit_team_profile_custom .row .col .profile_field_preview:hover span')
  .css('color')`,


`$('#edit_team_profile_custom .row .col input')
  .css('background')`,
`$('#edit_team_profile_custom .row .col input')
  .css('border')`,


`$('#edit_team_profile_custom .row .col[data-type=options_list] span::after')
  .css('color')`,


`$('#edit_team_profile_custom .row .col[data-type=options_list] input')
  .css('border-right')`,


`$('.profile_field_preview_protector .profile_field_preview')
  .css('background')`,
`$('.profile_field_preview_protector .profile_field_preview')
  .css('border')`,


`$('.profile_field_preview_protector .profile_field_preview::after')
  .css('background-color')`,
`$('.profile_field_preview_protector .profile_field_preview::after')
  .css('box-shadow')`,


`$('.profile_field_preview_protector .profile_field_preview::before')
  .css('background-color')`,
`$('.profile_field_preview_protector .profile_field_preview::before')
  .css('box-shadow')`,


`$('.profile_field_preview_protector .profile_field_preview input:disabled, .profile_field_preview_protector .profile_field_preview select:disabled')
  .css('background')`,
`$('.profile_field_preview_protector .profile_field_preview input:disabled, .profile_field_preview_protector .profile_field_preview select:disabled')
  .css('color')`,


`$('.profile_field_preview_protector .profile_field_preview .profile_field_preview_fade_out_mask')
  .css('background')`,


`$('.profile_field_preview_protector .profile_field_preview .profile_field_preview_ribbon::before')
  .css('border-color')`,


`$('.profile_field_preview_protector .profile_field_preview .profile_field_preview_ribbon::after')
  .css('border-color')`,


`$('ts-jumper ts-jumper-container')
  .css('background')`,
`$('ts-jumper ts-jumper-container')
  .css('box-shadow')`,


`$('ts-jumper ts-jumper-help')
  .css('color')`,


`$('ts-jumper input[type=text]')
  .css('border')`,
`$('ts-jumper input[type=text]')
  .css('color')`,


`$('ts-jumper input[type=text]:focus')
  .css('border')`,
`$('ts-jumper input[type=text]:focus')
  .css('color')`,


`$('ts-jumper input[type=text]::-webkit-input-placeholder, ts-jumper input[type=text]:focus::-webkit-input-placeholder, ts-jumper input[type=text]::-moz-placeholder, ts-jumper input[type=text]:focus::-moz-placeholder')
  .css('color')`,


`$('ts-jumper ol li')
  .css('color')`,


`$('ts-jumper ol li .channel_name, ts-jumper ol li .member_real_name, ts-jumper ol li .member_username, ts-jumper ol li .team_username')
  .css('color')`,


`$('ts-jumper ol li .channel_not_member, ts-jumper ol li .team_username, ts-jumper ol li .member_real_name+.member_username, ts-jumper ol li .member_username+.member_real_name, ts-jumper ol li ts-icon')
  .css('color')`,


`$('ts-jumper ol li .unread_count')
  .css('background')`,
`$('ts-jumper ol li .unread_count')
  .css('color')`,
`$('ts-jumper ol li .unread_count')
  .css('text-shadow')`,


`$('ts-jumper ol li.highlighted')
  .css('background')`,
`$('ts-jumper ol li.highlighted')
  .css('color')`,


`$('ts-jumper ol:not(.keyboard_active) li:hover')
  .css('background')`,
`$('ts-jumper ol:not(.keyboard_active) li:hover')
  .css('color')`,


`$('ts-jumper ol li.highlighted .channel_not_member, ts-jumper ol li.highlighted .member_real_name+.member_username, ts-jumper ol li.highlighted .member_username+.member_real_name, ts-jumper ol li.highlighted i.presence_icon, ts-jumper ol li.highlighted ts-icon, ts-jumper ol:not(.keyboard_active) li:hover .channel_not_member, ts-jumper ol:not(.keyboard_active) li:hover .member_real_name+.member_username, ts-jumper ol:not(.keyboard_active) li:hover .member_username+.member_real_name, ts-jumper ol:not(.keyboard_active) li:hover i.presence_icon, ts-jumper ol:not(.keyboard_active) li:hover ts-icon')
  .css('color')`,


`$('.basic_share_dialog .share_dialog_divider')
  .css('border-top-color')`,


`$('.share_dialog_attachment_container')
  .css('color')`,


`$('#share_dialog .file_list_item')
  .css('border-color')`,


`$('#generic_dialog.basic_share_dialog .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon), #share_dialog .lazy_filter_select .lfs_item .ts_icon:not(.presence_icon)')
  .css('color')`,


`$('#share_dialog_input_container #file_comment_textarea.ql-container')
  .css('border-color')`,


`$('#share_dialog_input_container #file_comment_textarea.ql-container.focus')
  .css('border-color')`,


`$('#share_dialog_input_container #file_comment_textarea.ql-container.focus~.emo_menu')
  .css('color')`,


`$('.ts_tip .ts_tip_multiline_inner, .ts_tip:not(.ts_tip_multiline) .ts_tip_tip')
  .css('background')`,


`$('.ts_tip .ts_tip_tip')
  .css('color')`,


`$('.ts_tip.ts_tip_left .ts_tip_tip::after')
  .css('border-left-color')`,


`$('.ts_tip.ts_tip_right .ts_tip_tip::after')
  .css('border-right-color')`,


`$('.ts_tip.ts_tip_top .ts_tip_tip::after')
  .css('border-top-color')`,


`$('.ts_tip.ts_tip_bottom .ts_tip_tip::after')
  .css('border-bottom-color')`,


`$('.ts_tip.success .ts_tip_tip')
  .css('background')`,


`$('.ts_tip.success.ts_tip_left .ts_tip_tip::after')
  .css('border-left-color')`,


`$('.ts_tip.success.ts_tip_right .ts_tip_tip::after')
  .css('border-right-color')`,


`$('.ts_tip.success.ts_tip_top .ts_tip_tip::after')
  .css('border-top-color')`,


`$('.ts_tip.success.ts_tip_bottom .ts_tip_tip::after')
  .css('border-bottom-color')`,


`$('.c-tooltip__tip')
  .css('background-color')`,
`$('.c-tooltip__tip')
  .css('color')`,


`$('.c-tooltip__tip--top .c-tooltip__tip__arrow')
  .css('border-top-color')`,


`$('.c-tooltip__tip--top-left .c-tooltip__tip__arrow')
  .css('border-top-color')`,


`$('.c-tooltip__tip--top-right .c-tooltip__tip__arrow')
  .css('border-top-color')`,


`$('.c-tooltip__tip--right .c-tooltip__tip__arrow')
  .css('border-right-color')`,


`$('.c-tooltip__tip--bottom .c-tooltip__tip__arrow')
  .css('border-bottom-color')`,


`$('.c-tooltip__tip--bottom-left .c-tooltip__tip__arrow')
  .css('border-bottom-color')`,


`$('.c-tooltip__tip--bottom-right .c-tooltip__tip__arrow')
  .css('border-bottom-color')`,


`$('.c-tooltip__tip--left .c-tooltip__tip__arrow')
  .css('border-left-color')`,


`$('.c-tooltip__tip--success')
  .css('background-color')`,


`$('.c-tooltip__tip--success.c-tooltip__tip--top::after, .c-tooltip__tip--success.c-tooltip__tip--top-left::after, .c-tooltip__tip--success.c-tooltip__tip--top-right::after')
  .css('border-top-color')`,


`$('.c-tooltip__tip--success.c-tooltip__tip--right::after')
  .css('border-right-color')`,


`$('.c-tooltip__tip--success.c-tooltip__tip--bottom::after, .c-tooltip__tip--success.c-tooltip__tip--bottom-left::after, .c-tooltip__tip--success.c-tooltip__tip--bottom-right::after')
  .css('border-bottom-color')`,


`$('.c-tooltip__tip--success.c-tooltip__tip--left::after')
  .css('border-left-color')`,


`$('#coachmark.calls_interactive_mas_migration_coachmark_div, #coachmark.calls_iss_window_coachmark_div, #coachmark.calls_ss_main_coachmark_div, #coachmark.calls_ss_window_coachmark_div, #coachmark.calls_video_beta_coachmark_div, #coachmark.calls_video_ga_coachmark_div, #coachmark.channels_coachmark_div, #coachmark.direct_messages_coachmark_div, #coachmark.enterprise_analytics_usage_callouts_coachmark_div, #coachmark.gdrive_coachmark_div, #coachmark.highlights_arrows_coachmark_div, #coachmark.highlights_feedback_coachmark_div, #coachmark.highlights_message_coachmark_div, #coachmark.intl_channel_names_coachmark_div, #coachmark.invites_coachmark_div, #coachmark.name_tagging_coachmark_div, #coachmark.onboarding_coachmark_div, #coachmark.recent_mentions_coachmark_div, #coachmark.replies_coachmark_div, #coachmark.screenhero_deprecation_coachmark_div, #coachmark.starred_items_coachmark_div, #coachmark.unread_view_coachmark_div')
  .css('background')`,


`$('#coachmark.calls_interactive_mas_migration_coachmark_div #coachmark_callout, #coachmark.calls_interactive_mas_migration_coachmark_div #coachmark_interior, #coachmark.calls_iss_window_coachmark_div #coachmark_callout, #coachmark.calls_iss_window_coachmark_div #coachmark_interior, #coachmark.calls_ss_main_coachmark_div #coachmark_callout, #coachmark.calls_ss_main_coachmark_div #coachmark_interior, #coachmark.calls_ss_window_coachmark_div #coachmark_callout, #coachmark.calls_ss_window_coachmark_div #coachmark_interior, #coachmark.calls_video_beta_coachmark_div #coachmark_callout, #coachmark.calls_video_beta_coachmark_div #coachmark_interior, #coachmark.calls_video_ga_coachmark_div #coachmark_callout, #coachmark.calls_video_ga_coachmark_div #coachmark_interior, #coachmark.channels_coachmark_div #coachmark_callout, #coachmark.channels_coachmark_div #coachmark_interior, #coachmark.direct_messages_coachmark_div #coachmark_callout, #coachmark.direct_messages_coachmark_div #coachmark_interior, #coachmark.enterprise_analytics_usage_callouts_coachmark_div #coachmark_callout, #coachmark.enterprise_analytics_usage_callouts_coachmark_div #coachmark_interior, #coachmark.gdrive_coachmark_div #coachmark_callout, #coachmark.gdrive_coachmark_div #coachmark_interior, #coachmark.highlights_arrows_coachmark_div #coachmark_callout, #coachmark.highlights_arrows_coachmark_div #coachmark_interior, #coachmark.highlights_feedback_coachmark_div #coachmark_callout, #coachmark.highlights_feedback_coachmark_div #coachmark_interior, #coachmark.highlights_message_coachmark_div #coachmark_callout, #coachmark.highlights_message_coachmark_div #coachmark_interior, #coachmark.intl_channel_names_coachmark_div #coachmark_callout, #coachmark.intl_channel_names_coachmark_div #coachmark_interior, #coachmark.invites_coachmark_div #coachmark_callout, #coachmark.invites_coachmark_div #coachmark_interior, #coachmark.name_tagging_coachmark_div #coachmark_callout, #coachmark.name_tagging_coachmark_div #coachmark_interior, #coachmark.onboarding_coachmark_div #coachmark_callout, #coachmark.onboarding_coachmark_div #coachmark_interior, #coachmark.recent_mentions_coachmark_div #coachmark_callout, #coachmark.recent_mentions_coachmark_div #coachmark_interior, #coachmark.replies_coachmark_div #coachmark_callout, #coachmark.replies_coachmark_div #coachmark_interior, #coachmark.screenhero_deprecation_coachmark_div #coachmark_callout, #coachmark.screenhero_deprecation_coachmark_div #coachmark_interior, #coachmark.starred_items_coachmark_div #coachmark_callout, #coachmark.starred_items_coachmark_div #coachmark_interior, #coachmark.unread_view_coachmark_div #coachmark_callout, #coachmark.unread_view_coachmark_div #coachmark_interior')
  .css('background')`,


`$('#coachmark_footer .coachmark_done, #coachmark_footer .coachmark_got_it, #coachmark_footer .coachmark_next_tip, #coachmark_footer .coachmark_ok')
  .css('background')`,


`$('#coachmark_interior')
  .css('color')`,


`$('#coachmark_interior .coachmark_close_btn')
  .css('color')`,


`$('.menu_member_header')
  .css('background')`,


`$('.menu_member_header .member_details .member_name_and_presence')
  .css('color')`,


`$('.menu_member_header .member_details .member_name_and_presence .member_name')
  .css('color')`,


`$('.menu_member_header .member_details .member_name_and_presence .presence.away')
  .css('color')`,


`$('.menu_member_header .member_details .member_title')
  .css('color')`,


`$('.menu_member_header .member_details .member_restriction, .menu_member_header .member_details .member_timezone_value')
  .css('color')`,


`$('.menu_member_header .member_details .member_restriction a, .menu_member_header .member_details .member_timezone_value a')
  .css('color')`,


`$('.menu_member_header .member_details .member_restriction a:hover, .menu_member_header .member_details .member_timezone_value a:hover')
  .css('color')`,


`$('.menu_member_header .member_details_divider')
  .css('border-color')`,


`$('.menu_member_footer')
  .css('background')`,
`$('.menu_member_footer')
  .css('border-top')`,


`$('.menu_member_footer p')
  .css('color')`,


`$('.member_meta')
  .css('color')`,


`$('.mini, .dull_grey, .flat_grey, .blue_link, .blue_fill, .slate_blue, .charcoal_grey, .indifferent_grey, .ts_tip_tip .subtle_silver')
  .css('color')`,


`$('.greigh, .sky_blue, .severe_grey, .havana_blue, .burnt_violet, .plastic_grey, .cloud_silver, .sk_dark_gray, .sk_dark_grey, .subtle_silver, .old_petunia_grey')
  .css('color')`,


`$('.clear_blue')
  .css('color')`,


`$('.moscow_red, .yolk_orange, .mustard_yellow, .candy_red_on_hover:hover, .moscow_red_on_hover:hover')
  .css('color')`,


`$('.seafoam_green')
  .css('color')`,


`$('.candy_red_bg')
  .css('background-color')`,


`$('.off_white_bg, .neutral_white_bg')
  .css('background-color')`,


`$('.yolk_orange_bg, .burnt_violet_bg, .flexpane_grey_bg')
  .css('background-color')`,


`$('.sky_blue_bg, .clear_blue_bg, .seafoam_green_bg')
  .css('background-color')`,


`$('.monkey_scroll_bar')
  .css('z-index')`,


`$('.client_header_icon')
  .css('-moz-filter')`,
`$('.client_header_icon')
  .css('-webkit-filter')`,
`$('.client_header_icon')
  .css('filter')`,


`$('nav.top.persistent')
  .css('background')`,


`$('nav.top.persistent .logo')
  .css('background-position')`,


`$('.widescreen #header_team_name a i')
  .css('margin-left')`,


`$('.widescreen #user_menu')
  .css('border-right')`,


`$('header #menu_toggle')
  .css('color')`,


`$('header #header_team_nav')
  .css('background')`,
`$('header #header_team_nav')
  .css('border')`,


`$('header #header_team_nav li.active a')
  .css('background')`,
`$('header #header_team_nav li.active a')
  .css('color')`,


`$('header .header_btns a')
  .css('color')`,


`$('header .header_btns a .label')
  .css('color')`,


`$('header .vert_divider')
  .css('border-left')`,


`$('footer')
  .css('background-color')`,
`$('footer')
  .css('border-color')`,
`$('footer')
  .css('color')`,


`$('footer ul a')
  .css('color')`,


`$('footer ul a:link, footer ul a:visited')
  .css('color')`,


`$('.plastic_row h3')
  .css('color')`,


`$('.plastic_row h4 a')
  .css('color')`,


`$('.plastic_row .icon')
  .css('color')`,


`$('.plastic_row .chevron')
  .css('color')`,


`$('.plastic_row .description')
  .css('color')`,


`$('.plastic_row:active')
  .css('background')`,
`$('.plastic_row:active')
  .css('border-color')`,


`$('.plastic_row:active .chevron')
  .css('color')`,


`$('html.no_touch .plastic_row:hover')
  .css('background')`,
`$('html.no_touch .plastic_row:hover')
  .css('border-color')`,


`$('html.no_touch .plastic_row:hover .chevron')
  .css('color')`,


`$('html.no_touch .pagination ul>li>a:hover')
  .css('background-color')`,


`$('html.no_touch .pagination ul>.disabled>a:hover')
  .css('background')`,
`$('html.no_touch .pagination ul>.disabled>a:hover')
  .css('color')`,


`$('html.no_touch .pager li>a:hover, html.no_touch .pager li>a:focus')
  .css('color')`,


`$('.card, .tab_pane')
  .css('background')`,
`$('.card, .tab_pane')
  .css('border')`,
`$('.card, .tab_pane')
  .css('color')`,


`$('.card h3 a')
  .css('color')`,


`$('#page_contents .card')
  .css('background')`,


`$('#page_contents .card p')
  .css('color')`,


`$('.tab_set a.secondary')
  .css('color')`,


`$('.tab_set a.selected, .tab_set a.secondary.selected')
  .css('background')`,
`$('.tab_set a.selected, .tab_set a.secondary.selected')
  .css('border')`,
`$('.tab_set a.selected, .tab_set a.secondary.selected')
  .css('border-bottom-color')`,
`$('.tab_set a.selected, .tab_set a.secondary.selected')
  .css('color')`,


`$('.tab_actions')
  .css('background')`,
`$('.tab_actions')
  .css('border')`,
`$('.tab_actions')
  .css('border-color')`,


`$('.accordion_section')
  .css('border-bottom-color')`,


`$('.accordion_section h4')
  .css('color')`,


`$('.accordion_section h4 a')
  .css('color')`,


`$('.no_touch .accordion_section h4 a:hover')
  .css('color')`,


`$('.accordion_section_fixed')
  .css('border-bottom-color')`,


`$('.pager li>a, .pager li>span')
  .css('background-color')`,
`$('.pager li>a, .pager li>span')
  .css('background-image')`,
`$('.pager li>a, .pager li>span')
  .css('border-color')`,
`$('.pager li>a, .pager li>span')
  .css('color')`,


`$('.pager li.previous>a, .pager li.previous>span')
  .css('background-position')`,
`$('.pager li.previous>a, .pager li.previous>span')
  .css('padding-right')`,
`$('.pager li.previous>a, .pager li.previous>span')
  .css('text-align')`,


`$('.pager li.next>a, .pager li.next>span')
  .css('background-position')`,
`$('.pager li.next>a, .pager li.next>span')
  .css('padding-left')`,
`$('.pager li.next>a, .pager li.next>span')
  .css('text-align')`,


`$('.pager .disabled>a, .pager .disabled>span')
  .css('color')`,


`$('.pagination ul>li>a, .pagination ul>li>span')
  .css('background')`,
`$('.pagination ul>li>a, .pagination ul>li>span')
  .css('border')`,
`$('.pagination ul>li>a, .pagination ul>li>span')
  .css('color')`,


`$('.pagination ul>li>a:focus')
  .css('background-color')`,


`$('.pagination ul>.active>a, .pagination ul>.active>span')
  .css('background-color')`,


`$('.pagination ul>.disabled>span')
  .css('background')`,
`$('.pagination ul>.disabled>span')
  .css('color')`,


`$('.pagination ul>.disabled>a')
  .css('background')`,
`$('.pagination ul>.disabled>a')
  .css('color')`,


`$('.pagination ul>.disabled>a:focus')
  .css('background')`,
`$('.pagination ul>.disabled>a:focus')
  .css('color')`,


`$('.loading_hash_animation img')
  .css('display')`,


`$('.icon_search_close')
  .css('color')`,


`$('.icon_search_close:hover')
  .css('color')`,


`$('.help')
  .css('border-top-color')`,
`$('.help')
  .css('color')`,


`$('.two_factor_option_app, .two_factor_option_sms, .configure-step1, .configure-step3')
  .css('display')`,


`$('.two_factor_choice')
  .css('background-color')`,
`$('.two_factor_choice')
  .css('border')`,
`$('.two_factor_choice')
  .css('box-shadow')`,


`$('.two_factor_choice:hover')
  .css('box-shadow')`,


`$('.two_factor_choice:hover .two_factor_link')
  .css('color')`,


`$('a.two_factor_choice')
  .css('background-color')`,
`$('a.two_factor_choice')
  .css('border')`,
`$('a.two_factor_choice')
  .css('box-shadow')`,


`$('a.two_factor_choice:link')
  .css('background-color')`,
`$('a.two_factor_choice:link')
  .css('border')`,
`$('a.two_factor_choice:link')
  .css('box-shadow')`,


`$('a.two_factor_choice:hover, a.two_factor_choice:link:hover')
  .css('box-shadow')`,


`$('a.two_factor_choice:hover .two_factor_link, a.two_factor_choice:link:hover .two_factor_link')
  .css('color')`,


`$('.backup_codes')
  .css('background')`,
`$('.backup_codes')
  .css('border-color')`,
`$('.backup_codes')
  .css('color')`,


`$('#channel_specific_settings tr')
  .css('border-top-color')`,


`$('#channel_specific_settings tr.channel_override_row.muted td')
  .css('background')`,


`$('#channel_specific_settings .extra_left_border')
  .css('border-left-color')`,


`$('#channel_specific_settings .extra_right_border')
  .css('border-right-color')`,


`$('#channel_specific_settings .revert_to_default')
  .css('color')`,


`$('#channel_specific_settings .revert_to_default:hover')
  .css('color')`,


`$('.admin_list_item')
  .css('border-bottom-color')`,
`$('.admin_list_item')
  .css('color')`,


`$('.admin_list_item:hover')
  .css('background-color')`,


`$('.admin_list_item .admin_member_full_name, .admin_list_item .admin_member_real_name')
  .css('color')`,


`$('.admin_list_item .admin_member_type, .admin_list_item .admin_member_caret')
  .css('color')`,


`$('.admin_list_item .pill.group')
  .css('background')`,


`$('.admin_list_item .two_factor_auth_badge:hover')
  .css('background')`,


`$('.admin_list_item .inline_email:hover, .admin_list_item .inline_name:hover, .admin_list_item .inline_username:hover')
  .css('background')`,


`$('.admin_list_item.invite_item.bouncing')
  .css('background')`,


`$('.admin_list_item.invite_item.bouncing .email')
  .css('color')`,


`$('.admin_list_item.error, .admin_list_item.expanded, .admin_list_item.processing, .admin_list_item.success')
  .css('background-color')`,


`$('.admin_list_item.expanded .btn_outline')
  .css('border-color')`,
`$('.admin_list_item.expanded .btn_outline')
  .css('color')`,


`$('.admin_list_item.expanded .btn_outline:hover')
  .css('border-color')`,
`$('.admin_list_item.expanded .btn_outline:hover')
  .css('color')`,


`$('.admin_list_item.expanded .sub_action')
  .css('color')`,


`$('.admin_list_item.expanded .sub_action:hover')
  .css('color')`,


`$('@media screen and (max-width')
  .css('.admin_list_item.expanded .sub_action+.sub_action:hover::before,     .admin_list_item.expanded .sub_action+.sub_action:hover::after')`,
`$('@media screen and (max-width')
  .css('color')`,

//   .css('}
// **********************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// WHAT HAPPEND HERE!!!!!!!!!!!!!!!!!!
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************
// *********************************************************************************************************





}`$('.billing_selection')
  .css('border-color')`,
`$('.billing_selection')
  .css('color')`,
`$('.billing_selection')
  .css('text-shadow')`,


`$('.billing_selection:hover')
  .css('border-color')`,


`$('.billing_selection.active')
  .css('background')`,
`$('.billing_selection.active')
  .css('border-color')`,


`$('.billing_selection.billing_selection--refactor')
  .css('border-color')`,
`$('.billing_selection.billing_selection--refactor')
  .css('text-shadow')`,


`$('.billing_selection.billing_selection--refactor:hover')
  .css('border-color')`,


`$('.billing_selection.billing_selection--refactor.active')
  .css('background')`,
`$('.billing_selection.billing_selection--refactor.active')
  .css('border-color')`,


`$('.billing_selection .billing_selection__price')
  .css('color')`,


`$('#billing_contacts_container')
  .css('background')`,
`$('#billing_contacts_container')
  .css('border-top')`,


`$('.billing_contact')
  .css('border-bottom')`,


`$('table.billing tr:hover td')
  .css('background')`,


`$('.link_billing_statement')
  .css('color')`,


`$('.link_invoice_id, .link_statement_id')
  .css('color')`,


`$('.billing_invoice tbody tbody tr')
  .css('color')`,


`$('.billing_settings_label_name')
  .css('color')`,


`$('table tr')
  .css('border-bottom-color')`,


`$('table tr:first-child th:not(:only-of-type)')
  .css('border-bottom-color')`,


`$('.slackbot_response_fieldset .delete_response')
  .css('color')`,


`$('.slackbot_response_fieldset .delete_response:hover')
  .css('color')`,


`$('.author_cell')
  .css('color')`,


`$('.message_cell.disabled')
  .css('color')`,


`$('#message_container #msg_limit')
  .css('color')`,


`$('.statuses_container .current_status_cell .current_status_container .current_status_cover, .statuses_container .current_status_cell .current_status_container:not(.active).with_status_set .current_status_cover')
  .css('border-color')`,


`$('.statuses_container .current_status_cell .current_status_container .current_status_emoji_picker_cover, .statuses_container .current_status_cell .current_status_container:not(.active).with_status_set .current_status_emoji_picker_cover')
  .css('border-right')`,


`$('.inactive')
  .css('background-image')`,


`$('.c3 line, .c3 path')
  .css('stroke')`,


`$('.c3-chart-arc .c3-gauge-value')
  .css('fill')`,


`$('.c3-chart-arc path')
  .css('stroke')`,


`$('.c3-chart-arc text')
  .css('fill')`,


`$('.c3-chart-arcs .c3-chart-arcs-background')
  .css('fill')`,


`$('.c3-chart-arcs .c3-chart-arcs-gauge-max, .c3-chart-arcs .c3-chart-arcs-gauge-min')
  .css('fill')`,


`$('.c3-chart-arcs .c3-chart-arcs-gauge-unit')
  .css('fill')`,


`$('.c3-circle._expanded_')
  .css('stroke')`,


`$('.c3-grid line')
  .css('stroke')`,


`$('.c3-grid text')
  .css('fill')`,


`$('.c3-legend-background')
  .css('fill')`,
`$('.c3-legend-background')
  .css('stroke')`,


`$('.c3-region')
  .css('fill')`,


`$('.c3-selected-circle')
  .css('fill')`,


`$('.c3-tooltip')
  .css('background-color')`,
`$('.c3-tooltip')
  .css('box-shadow')`,


`$('.c3-tooltip td')
  .css('background-color')`,
`$('.c3-tooltip td')
  .css('border-left-color')`,


`$('.c3-tooltip th')
  .css('background-color')`,
`$('.c3-tooltip th')
  .css('color')`,


`$('.c3-tooltip tr')
  .css('border-color')`,


`$('.ent_alert a')
  .css('color')`,


`$('.ent_alert a:link, .ent_alert a:visited')
  .css('color')`,


`$('.ent_alert_page.ent_alert_error')
  .css('background')`,


`$('.ent_alert_page.ent_alert_success')
  .css('background')`,


`$('.ent_analytics__disclaimer')
  .css('border-top-color')`,
`$('.ent_analytics__disclaimer')
  .css('color')`,


`$('.ent_analytics_overview__header')
  .css('box-shadow')`,


`$('.ent_avatar--bordered::before')
  .css('box-shadow')`,


`$('.ent_avatar')
  .css('background-color')`,


`$('.ent_callout__difference--increase')
  .css('color')`,


`$('.ent_callout__icon_border')
  .css('background-color')`,
`$('.ent_callout__icon_border')
  .css('border-color')`,


`$('.ent_callout__icon_image, .ent_callout__icon--filled')
  .css('border-color')`,


`$('.ent_callout__icon--empty, .ent_callout__icon--hidden')
  .css('border-color')`,


`$('.ent_callout__icon--limit_reached')
  .css('border-color')`,


`$('.ent_callout__insight')
  .css('color')`,


`$('.ent_callout__limit')
  .css('color')`,


`$('.ent_callout__meter_bar_container')
  .css('background')`,


`$('.ent_callout__meter_bar_border')
  .css('border-color')`,


`$('.ent_callout__meter_bar_fill--empty')
  .css('background')`,
`$('.ent_callout__meter_bar_fill--empty')
  .css('border-color')`,


`$('.ent_callout__meter_bar_fill--filled')
  .css('background')`,
`$('.ent_callout__meter_bar_fill--filled')
  .css('border-color')`,


`$('.ent_callout__meter_bar_fill--limit_reached')
  .css('background')`,
`$('.ent_callout__meter_bar_fill--limit_reached')
  .css('border-color')`,


`$('.ent_callout__meter_bar_gleam')
  .css('background')`,


`$('.ent_callout__title')
  .css('color')`,


`$('.ent_copy_muted')
  .css('color')`,


`$('.ent_copy')
  .css('color')`,


`$('.ent_csv_popover__footer_text')
  .css('color')`,


`$('.ent_csv_popover__footer')
  .css('background')`,
`$('.ent_csv_popover__footer')
  .css('border-top-color')`,


`$('.ent_csv_popover__subtitle')
  .css('color')`,


`$('.ent_csv_popover__title')
  .css('color')`,


`$('.ent_data_table__cell--header')
  .css('color')`,


`$('.ent_data_table__cell--positive')
  .css('color')`,


`$('.ent_data_table__cell--sortable:hover')
  .css('background-color')`,


`$('.ent_data_table__cell--sorting')
  .css('color')`,


`$('.ent_data_table__cell')
  .css('border-bottom-color')`,
`$('.ent_data_table__cell')
  .css('color')`,


`$('.ent_data_table__column_group--pinned .ent_data_table__row, .ent_data_table__column_group--right_border')
  .css('border-right-color')`,


`$('.ent_data_table__column_group')
  .css('background-color')`,


`$('.ent_data_table__data_link, a.ent_data_table__data_link')
  .css('color')`,


`$('.ent_data_table__row--hovered')
  .css('background-color')`,


`$('.ent_data_table__scrollable--left_shadow::before')
  .css('box-shadow')`,


`$('.ent_data_table__scrollable--left_shadow.ent_data_table__scrollable--right_shadow::before')
  .css('box-shadow')`,


`$('.ent_data_table__scrollable--right_shadow::before')
  .css('box-shadow')`,


`$('.ent_data_table__secondary_text')
  .css('color')`,


`$('.ent_data_table__thead, .ent_data_table--empty_state_wrapper')
  .css('background-color')`,


`$('.ent_data_table--fix_borders .ent_data_table__row, .ent_data_table--fix_borders .ent_data_table__thead')
  .css('border-bottom-color')`,


`$('.ent_data_table--rounded_top')
  .css('border-top-color')`,


`$('.ent_data_table')
  .css('border-bottom-color')`,
`$('.ent_data_table')
  .css('border-left-color')`,
`$('.ent_data_table')
  .css('border-right-color')`,


`$('.ent_empty_state_overlay__content_heading, .ent_empty_state_overlay__content_main_heading')
  .css('color')`,


`$('.ent_graph__data_summary_date_label, .ent_graph__data_summary_point::after')
  .css('color')`,


`$('.ent_graph__legend_item--defocus')
  .css('fill')`,


`$('.ent_graph__legend_text')
  .css('fill')`,


`$('.ent_graph__svg_container .c3-axis path')
  .css('stroke')`,


`$('.ent_graph__svg_container .c3-grid line')
  .css('stroke')`,


`$('.ent_graph__svg_container .c3-grid .ent_xgrid_month_divider line, .ent_graph__svg_container .c3-grid .ent_xgrid_week_divider line, .ent_graph__svg_container .c3-grid .ent_xgrid_year_divider line')
  .css('stroke')`,


`$('.ent_graph__svg_container .c3-tooltip')
  .css('border-color')`,
`$('.ent_graph__svg_container .c3-tooltip')
  .css('box-shadow')`,


`$('.ent_graph__svg_container .c3-tooltip td, .ent_graph__svg_container .c3-tooltip th, .ent_graph__svg_container .c3-tooltip tr')
  .css('background-color')`,
`$('.ent_graph__svg_container .c3-tooltip td, .ent_graph__svg_container .c3-tooltip th, .ent_graph__svg_container .c3-tooltip tr')
  .css('color')`,


`$('.ent_graph__svg_container .c3-tooltip th')
  .css('border-bottom-color')`,


`$('.ent_graph__svg_container .c3-xgrid-focus line')
  .css('stroke')`,


`$('.ent_graph__svg_container .ent_graph__point:not(._expanded_)')
  .css('fill')`,


`$('.ent_graph__svg_container .ent_graph__point._expanded_')
  .css('stroke')`,


`$('.ent_graph__svg_container text')
  .css('fill')`,


`$('.ent_graph__tooltip')
  .css('color')`,


`$('.ent_graph_empty__overlay')
  .css('background')`,


`$('.ent_graph_empty__text')
  .css('color')`,


`$('.ent_graph_header--primary')
  .css('color')`,


`$('.ent_graph_header--secondary')
  .css('color')`,


`$('.ent_graph_tabs__tab--selected')
  .css('color')`,


`$('.ent_graph_tabs__tab--selected_ent_violet::after, .ent_graph_tabs__tab--selected_fill_blue::after, .ent_graph_tabs__tab--selected_seafoam_green::after')
  .css('background-color')`,


`$('.ent_graph_tabs__tab')
  .css('color')`,


`$('.ent_graph_tabs')
  .css('border-bottom-color')`,


`$('.ent_header')
  .css('color')`,


`$('.ent_icon_button')
  .css('color')`,


`$('.ent_icon_button:hover')
  .css('color')`,


`$('.ent_infographic_container')
  .css('border-top-color')`,


`$('.ent_loading__overlay')
  .css('background-image')`,


`$('.ent_modal__title--small')
  .css('color')`,


`$('.ent_modal_background')
  .css('background-color')`,


`$('.ent_modal_breadcrumb_animated_step')
  .css('background')`,


`$('.ent_modal_breadcrumb_circle_icon')
  .css('background')`,


`$('.ent_modal_breadcrumb_line')
  .css('background')`,


`$('.ent_modal_breadcrumb_text')
  .css('color')`,


`$('.ent_modal_footer')
  .css('background-color')`,


`$('.ent_modal_title')
  .css('color')`,


`$('.ent_table__header--title')
  .css('color')`,


`$('.ent_table__header')
  .css('background-color')`,
`$('.ent_table__header')
  .css('border-color')`,


`$('.ent_table_banner__contents')
  .css('background')`,
`$('.ent_table_banner__contents')
  .css('border-top-color')`,
`$('.ent_table_banner__contents')
  .css('box-shadow')`,


`$('.ent_table_banner__header')
  .css('color')`,


`$('.ent_table_banner__secondary_text')
  .css('color')`,


`$('.ent_table_customizer__header_subtitle')
  .css('color')`,


`$('.ent_table_customizer_disabled_list_header')
  .css('color')`,


`$('.ent_table_customizer_footer')
  .css('background-color')`,
`$('.ent_table_customizer_footer')
  .css('border-top-color')`,
`$('.ent_table_customizer_footer')
  .css('color')`,


`$('.ent_table_customizer_header')
  .css('border-bottom-color')`,


`$('.ent_table_customizer_list_item--disabled')
  .css('color')`,


`$('.ent_updated_at')
  .css('color')`,


`$('.enterprise')
  .css('background-color')`,


`$('.enterprise .btn.candy_red')
  .css('color')`,


`$('.enterprise_analytics')
  .css('background-color')`,


`$('.enterprise_org')
  .css('background-color')`,


`$('.enterprise_search_bar .ent_clear_search_icon')
  .css('color')`,


`$('.enterprise_search_bar::before')
  .css('color')`,


`$('@keyframes color_fade')
  .css('from')`,
`$('@keyframes color_fade')
  .css('color')`,
`$('@keyframes color_fade')
  .css('}`,
    to')
  .css('color')

//   .css('}
*************************************************


}`$('.file_header .title a')
  .css('color')`,


`$('.file_header .title a:hover')
  .css('color')`,


`$('.file_actions_cog')
  .css('color')`,


`$('.file_actions_cog:hover')
  .css('color')`,


`$('.file_reference .icon, .file_list_item .icon, .file_preview')
  .css('border')`,


`$('.action_cog')
  .css('color')`,


`$('.action_cog i')
  .css('color')`,


`$('html.no_touch .action_cog:hover')
  .css('color')`,


`$('html.no_touch .action_cog:hover i')
  .css('color')`,


`$('.help_pages.help_pages p')
  .css('color')`,


`$('.help_pages.help_pages a')
  .css('border-bottom-color')`,


`$('.help_pages.help_pages .o-hero, .help_pages.help_pages .o-hero__header')
  .css('background-color')`,


`$('.help_pages.help_pages .o-hero__header')
  .css('color')`,


`$('.help_pages.help_pages .o-section--feature')
  .css('background-color')`,
`$('.help_pages.help_pages .o-section--feature')
  .css('border-top-color')`,


`$('.help_pages.help_pages .c-form__container .c-form__feedback')
  .css('color')`,


`$('.help_pages.help_pages .c-form__input, .help_pages.help_pages .c-input')
  .css('background-color')`,
`$('.help_pages.help_pages .c-form__input, .help_pages.help_pages .c-input')
  .css('border-color')`,
`$('.help_pages.help_pages .c-form__input, .help_pages.help_pages .c-input')
  .css('color')`,


`$('.help_pages.help_pages .drop_zone')
  .css('background')`,
`$('.help_pages.help_pages .drop_zone')
  .css('border-color')`,


`$('.help_pages.help_pages .drop_zone_attachment')
  .css('border-bottom-color')`,


`$('.help_pages.help_pages .drop_zone_remove_attachment')
  .css('background-color')`,


`$('.help_pages.help_pages .c-form__notice')
  .css('background-color')`,
`$('.help_pages.help_pages .c-form__notice')
  .css('border-color')`,
`$('.help_pages.help_pages .c-form__notice')
  .css('color')`,


`$('.help_pages.help_pages .c-form__notice.is-error')
  .css('border-left-color')`,


`$('.help_pages.help_pages .c-nav--footer')
  .css('border-top-color')`,


`$('@media screen and (min-width')
  .css('.help_pages.help_pages .o-hero')`,
`$('@media screen and (min-width')
  .css('background-color')`,
`$('@media screen and (min-width')
  .css('}`,
}`$('.widescreen:not(.nav_open)')
  .css('color')`,


`$('@media only screen and (min-width')
  .css('.widescreen:not(.nav_open) nav#site_nav')`,
`$('@media only screen and (min-width')
  .css('background')`,
`$('@media only screen and (min-width')
  .css('}`,
}`$('.widescreen:not(.nav_open) nav#site_nav h3')
  .css('color')`,


`$('.widescreen:not(.nav_open) nav#site_nav ul a')
  .css('color')`,


`$('.widescreen:not(.nav_open) nav#site_nav ul a:link, .widescreen:not(.nav_open) nav#site_nav ul a:visited, .widescreen:not(.nav_open) nav#site_nav ul a:hover, .widescreen:not(.nav_open) nav#site_nav ul a:active')
  .css('color')`,


`$('.widescreen:not(.nav_open) nav#site_nav #user_menu_name')
  .css('color')`,


`$('nav#site_nav')
  .css('background')`,


`$('nav#site_nav #user_menu_contents:hover')
  .css('background')`,
`$('nav#site_nav #user_menu_contents:hover')
  .css('color')`,


`$('header')
  .css('background')`,


`$('header #header_team_nav li a')
  .css('color')`,


`$('header #header_team_nav li a:hover')
  .css('background')`,
`$('header #header_team_nav li a:hover')
  .css('color')`,


`$('header #header_team_nav li a .team_icon.ts_icon_plus')
  .css('background')`,
`$('header #header_team_nav li a .team_icon.ts_icon_plus')
  .css('color')`,


`$('header #header_team_nav #add_team_option')
  .css('border-top')`,


`$('html.no_touch header #header_team_nav li a')
  .css('color')`,


`$('html.no_touch header #header_team_nav li a:hover')
  .css('background')`,
`$('html.no_touch header #header_team_nav li a:hover')
  .css('color')`,


`$('html.no_touch header #header_team_name a:hover, html.no_touch header #menu_toggle:hover')
  .css('color')`,


`$('html.no_touch header .header_btns a:hover')
  .css('color')`,


`$('html.no_touch header .header_btns a:hover .label')
  .css('color')`,


`$('nav#site_nav h3, #header_team_name, header #header_team_name a')
  .css('color')`,


`$('nav#site_nav #footer_nav a, #header_team_name:hover .fa-caret-down, .widescreen:not(.nav_open) nav#site_nav #footer_nav a')
  .css('color')`,


`$('#home_footer a')
  .css('color')`,


`$('.admin_pref:not(:first-of-type)')
  .css('border-top-color')`,


`$('.admin_pref.locked')
  .css('background-color')`,


`$('.admin_pref .admin_pref_locked_label')
  .css('color')`,


`$('.tooltip-inner')
  .css('background-color')`,
`$('.tooltip-inner')
  .css('color')`,


`$('.tooltip.top .tooltip-arrow, .tooltip.top-left .tooltip-arrow')
  .css('border-top-color')`,


`$('.tooltip.right .tooltip-arrow')
  .css('border-right-color')`,


`$('.tooltip.left .tooltip-arrow')
  .css('border-left-color')`,


`$('.tooltip.bottom .tooltip-arrow')
  .css('border-bottom-color')`,


`$('.api #header_logo img')
  .css('display')`,


`$('body.api header .header_links a')
  .css('color')`,


`$('body.api header .header_links a.active')
  .css('background')`,


`$('body.api .reverse_header')
  .css('background-color')`,
`$('body.api .reverse_header')
  .css('color')`,


`$('body.api pre')
  .css('overflow-x')`,


`$('body.api pre code')
  .css('color')`,


`$('body.api #page_contents .card')
  .css('background')`,


`$('body.api .scopes_to_methods code')
  .css('color')`,


`$('body.api .scopes_to_methods .selected code')
  .css('color')`,


`$('body.api .scopes_to_methods li')
  .css('color')`,


`$('body.api .scopes_to_methods .selected li')
  .css('color')`,


`$('body.api .section_title')
  .css('border-bottom')`,


`$('body.api .example')
  .css('border')`,


`$('body.api .example h5')
  .css('background-color')`,
`$('body.api .example h5')
  .css('color')`,


`$('body.api .alert')
  .css('background')`,


`$('body.api .hljs')
  .css('background-image')`,


`$('body.api .hljs-keyword, body.api .hljs-selector-tag, body.api .hljs-subst')
  .css('color')`,


`$('body.api .hljs-number')
  .css('color')`,


`$('body.api .hljs-literal, body.api .hljs-tag .hljs-attr')
  .css('color')`,


`$('body.api .hljs-variable')
  .css('color')`,


`$('body.api .hljs-template-variable')
  .css('color')`,


`$('body.api .hljs-comment')
  .css('color')`,


`$('body.api .hljs-doctag, body.api .hljs-string')
  .css('color')`,


`$('body.api .hljs-section, body.api .hljs-selector-id, body.api .hljs-title')
  .css('color')`,


`$('body.api .hljs-meta')
  .css('color')`,


`$('body.api .hljs-class .hljs-title, body.api .hljs-type')
  .css('color')`,


`$('body.api .hljs-built_in, body.api .hljs-builtin-name')
  .css('color')`,


`$('body.api .hljs-tag')
  .css('color')`,


`$('body.api .hljs-attribute, body.api .hljs-name')
  .css('color')`,


`$('body.api .hljs-bullet, body.api .hljs-symbol')
  .css('color')`,


`$('body.api .hljs-quote')
  .css('color')`,


`$('body.api .hljs-link, body.api .hljs-regexp')
  .css('color')`,


`$('body.api span.btn')
  .css('background-color')`,


`$('body.api span.deprecation, body.api span.warning')
  .css('background-color')`,
`$('body.api span.deprecation, body.api span.warning')
  .css('border-color')`,


`$('nav#api_nav')
  .css('background')`,
`$('nav#api_nav')
  .css('text-shadow')`,


`$('#api_nav .footer_nav a')
  .css('color')`,


`$('#api_nav .footer_nav a:hover')
  .css('color')`,


`$('#api_nav .footer_nav .footer_signature')
  .css('color')`,


`$('.api_articles .api_articles_section')
  .css('border-bottom-color')`,


`$('.api_articles .article_tag_count')
  .css('color')`,


`$('.api.feature_related_content #api_related_content h2')
  .css('color')`,


`$('.api.feature_related_content #api_related_content .article_link_title_wrapper')
  .css('color')`,


`$('.tab_menu')
  .css('background-color')`,


`$('.tab_menu.grey')
  .css('background-color')`,


`$('.tab_menu .tab')
  .css('color')`,


`$('.tab_menu .tab:hover')
  .css('box-shadow')`,


`$('.tab_menu .tab.active, .tab_menu .tab:active, .tab_menu .tab:focus')
  .css('box-shadow')`,
`$('.tab_menu .tab.active, .tab_menu .tab:active, .tab_menu .tab:focus')
  .css('color')`,


`$('.tab_menu .tab:disabled')
  .css('color')`,


`$('.page_faq h3, .page_scim h3')
  .css('background-color')`,


`$('.application_config aside')
  .css('color')`,


`$('.page_apps_directory_home')
  .css('background-color')`,


`$('.page_apps_directory_home .nav_title')
  .css('color')`,


`$('.page_apps_directory_home__search .apps_search_input::placeholder, .page_apps_directory_home__search .apps_search_input:focus::placeholder')
  .css('color')`,


`$('.page_apps_directory_home__search .apps_search_input__body')
  .css('box-shadow')`,


`$('.splash_container__background')
  .css('background-color')`,


`$('.splash_container__background--left, .splash_container__background--center, .splash_container__background--right')
  .css('display')`,


`$('.splash_interactive__button')
  .css('border-color')`,


`$('.splash_interactive__button--active')
  .css('box-shadow')`,


`$('.splash_interactive__window')
  .css('background-color')`,
`$('.splash_interactive__window')
  .css('border-color')`,


`$('.splash_interactive__window:hover .splash_interactive__window_headline')
  .css('color')`,


`$('.splash_interactive__window::after')
  .css('background')`,


`$('.splash_interactive__window_response')
  .css('background-color')`,


`$('a.splash_interactive__window_link')
  .css('color')`,


`$('.splash_interactive__window_message_content_text--drive')
  .css('color')`,


`$('.search_input.apps_search_input')
  .css('border-color')`,


`$('.menu_launcher, .menu_launcher_large')
  .css('background-color')`,
`$('.menu_launcher, .menu_launcher_large')
  .css('border-color')`,
`$('.menu_launcher, .menu_launcher_large')
  .css('color')`,


`$('.menu_launcher_large')
  .css('border-color')`,


`$('.menu.avatar_menu ul li:hover ts-icon')
  .css('background')`,
`$('.menu.avatar_menu ul li:hover ts-icon')
  .css('color')`,


`$('.menu.avatar_menu ul li a')
  .css('color')`,


`$('.menu.avatar_menu ul li a img, .menu.avatar_menu ul li a ts-icon')
  .css('background-color')`,
`$('.menu.avatar_menu ul li a img, .menu.avatar_menu ul li a ts-icon')
  .css('color')`,


`$('.menu.avatar_menu:not(.keyboard_active) ul li:hover:not(.disabled) a ts-icon')
  .css('color')`,


`$('#page .media_list')
  .css('background-color')`,
`$('#page .media_list')
  .css('border')`,


`$('#page .media_list>li+li::before')
  .css('border-top-color')`,


`$('#page .media_list>li.interactive a')
  .css('color')`,


`$('#page .media_list>li.interactive a:focus, #page .media_list>li.interactive a:hover')
  .css('background')`,
`$('#page .media_list>li.interactive a:focus, #page .media_list>li.interactive a:hover')
  .css('border-color')`,


`$('#page .media_list>li .media_list_text')
  .css('color')`,


`$('#page .media_list.media_list_with_arrows a::before')
  .css('color')`,


`$('#page .media_list_title')
  .css('color')`,


`$('#page .media_list_subtitle')
  .css('color')`,


`$('#page .sidebar_menu_list_item')
  .css('color')`,


`$('#page .sidebar_menu_list_item.is_active')
  .css('background-color')`,
`$('#page .sidebar_menu_list_item.is_active')
  .css('border-color')`,
`$('#page .sidebar_menu_list_item.is_active')
  .css('color')`,
`$('#page .sidebar_menu_list_item.is_active')
  .css('text-shadow')`,


`$('#page .sidebar_menu_list_item.is_active a')
  .css('color')`,


`$('#page .sidebar_menu_list_item:not(.is_active):hover')
  .css('background-color')`,
`$('#page .sidebar_menu_list_item:not(.is_active):hover')
  .css('border-color')`,


`$('#page .sidebar_menu_list_item a')
  .css('color')`,


`$('#page ul.breadcrumbs li')
  .css('color')`,


`$('#page ul.breadcrumbs li:not(:first-child)::before')
  .css('color')`,


`$('#page ul.navigation_list li a')
  .css('color')`,


`$('#page ul.navigation_list li a:hover')
  .css('background-color')`,


`$('#page ul.navigation_list li a::after')
  .css('color')`,


`$('#page ul.navigation_list li+li a')
  .css('border-top')`,


`$('#page .tag')
  .css('background-color')`,
`$('#page .tag')
  .css('border')`,


`$('#page .tag:hover')
  .css('background-color')`,


`$('#page .app_desc_btn')
  .css('background-color')`,
`$('#page .app_desc_btn')
  .css('color')`,


`$('#page .app_desc_expand_showing .app_profile_desc_fade')
  .css('background')`,


`$('.app_card, .large_app_card')
  .css('background-color')`,
`$('.app_card, .large_app_card')
  .css('border')`,


`$('nav.top.persistent ul a')
  .css('color')`,


`$('nav.top.apps_nav')
  .css('background')`,


`$('nav.top.apps_nav.persistent .nav_title')
  .css('border-color')`,


`$('nav.top.apps_nav.clear_nav .nav_title a')
  .css('color')`,


`$('nav.top.apps_nav .nav_title a')
  .css('color')`,


`$('nav.top.apps_nav ul a.active')
  .css('color')`,


`$('.plastic_typeahead')
  .css('background')`,
`$('.plastic_typeahead')
  .css('border')`,
`$('.plastic_typeahead')
  .css('box-shadow')`,


`$('.plastic_typeahead_item')
  .css('color')`,


`$('.plastic_typeahead_item+.plastic_typeahead_item')
  .css('border-top')`,


`$('.plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active')
  .css('background-color')`,
`$('.plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active')
  .css('border-top-color')`,
`$('.plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active')
  .css('color')`,


`$('.plastic_typeahead_item:not(.plastic_typeahead_item_no_results).is_active ts-icon')
  .css('color')`,


`$('.plastic_typeahead_item:not(.plastic_typeahead_item_no_results):not(.is_active):hover')
  .css('background')`,
`$('.plastic_typeahead_item:not(.plastic_typeahead_item_no_results):not(.is_active):hover')
  .css('border-color')`,


`$('.plastic_typeahead_item:not(.plastic_typeahead_item_no_results):not(.is_active):hover+.plastic_typeahead_item')
  .css('border-color')`,


`$('a.plastic_typeahead_item')
  .css('color')`,


`$('.apps_typeahead_item_media')
  .css('background')`,


`$('.search_input_container .search_input:focus~.icon_search_input')
  .css('color')`,


`$('.icon_search_input')
  .css('color')`,


`$('.quote_block')
  .css('color')`,


`$('.quote_block::before')
  .css('background-color')`,


`$('.well')
  .css('background')`,
`$('.well')
  .css('border-color')`,
`$('.well')
  .css('color')`,
`$('.well')
  .css('text-shadow')`,


`$('.service_breadcrumbs li .ts_icon, .service_breadcrumbs li span')
  .css('color')`,


`$('.c-tabs__tab_menu')
  .css('background-color')`,
`$('.c-tabs__tab_menu')
  .css('box-shadow')`,


`$('.c-tabs__tab')
  .css('color')`,


`$('.c-tabs__tab:hover')
  .css('color')`,


`$('.c-tabs__tab.c-tabs__tab--active, .c-tabs__tab:active, .c-tabs__tab:focus')
  .css('box-shadow')`,
`$('.c-tabs__tab.c-tabs__tab--active, .c-tabs__tab:active, .c-tabs__tab:focus')
  .css('color')`,


`$('.c-tabs__tab_menu--plastic')
  .css('background-color')`,
`$('.c-tabs__tab_menu--plastic')
  .css('box-shadow')`,


`$('a.c-tabs__tab--plastic')
  .css('color')`,


`$('a.c-tabs__tab--plastic:hover')
  .css('color')`,


`$('a.c-tabs__tab--plastic.c-tabs__tab--active, a.c-tabs__tab--plastic:active, a.c-tabs__tab--plastic:focus')
  .css('box-shadow')`,
`$('a.c-tabs__tab--plastic.c-tabs__tab--active, a.c-tabs__tab--plastic:active, a.c-tabs__tab--plastic:focus')
  .css('color')`,


`$('.p-detail_scope')
  .css('box-shadow')`,


`$('.p-detail_scope:last-child')
  .css('border-bottom-color')`,


`$('.p-detail_dangerous_scope')
  .css('border-left-color')`,
`$('.p-detail_dangerous_scope')
  .css('border-right-color')`,


`$('.p-detail_arrow_icon')
  .css('color')`,


`$('.p-detail_arrow_icon:hover')
  .css('color')`,


`$('.p-detail_permissions')
  .css('background')`,
`$('.p-detail_permissions')
  .css('border-color')`,


`$('table.gray_header_border tr:first-child th:not(:only-of-type)')
  .css('border-bottom-color')`,


`$('.section_rollup')
  .css('border-bottom-color')`,


`$('.section_rollup:first-of-type')
  .css('border-top-color')`,


`$('.section_rollup:hover:not(.is_active)')
  .css('background')`,
`$('.section_rollup:hover:not(.is_active)')
  .css('color')`,


`$('.is_completed_section .section_rollup_header::before, .is_failed_section .section_rollup_header::before')
  .css('background-color')`,
`$('.is_completed_section .section_rollup_header::before, .is_failed_section .section_rollup_header::before')
  .css('color')`,


`$('.developer_apps_functionality_link:hover')
  .css('border-color')`,
`$('.developer_apps_functionality_link:hover')
  .css('box-shadow')`,


`$('.developer_apps_functionality_link::before')
  .css('background-color')`,


`$('.developer_apps_functionality_link_enabled::before')
  .css('background-color')`,


`$('.legal-hero')
  .css('background-color')`,


`$('.legal-hero.v--no-switch, .legal-hero .o-hero__header')
  .css('background-color')`,


`$('.legal-hero .o-hero__header__headline--larger')
  .css('color')`,


`$('.legal-main')
  .css('background-color')`,


`$('.legal-main.v--no-switch')
  .css('background-color')`,
`$('.legal-main.v--no-switch')
  .css('border-bottom-color')`,
`$('.legal-main.v--no-switch')
  .css('border-top-color')`,


`$('.legal-main p')
  .css('color')`,


`$('.legal-main a')
  .css('border-bottom-color')`,


`$('@media screen and (min-width')
  .css('.legal-main .c-nav--sidebar__listheader')`,
`$('@media screen and (min-width')
  .css('color')`,
`$('@media screen and (min-width')
  .css('}`,
    .legal-main .c-nav--sidebar__listitem a.is-selected')
  .css('color')
  .css('}
}`$('.legal-main .t-contains-subtle-links a:not(.c-button)')
  .css('color')`,


`$('.legal-main .t-contains-subtle-links a:not(.c-button):active, .legal-main .t-contains-subtle-links a:not(.c-button):focus, .legal-main .t-contains-subtle-links a:not(.c-button):hover')
  .css('color')`,


`$('@media screen and (min-width')
  .css('.t-no-header .legal-main')`,
`$('@media screen and (min-width')
  .css('background-color')`,
`$('@media screen and (min-width')
  .css('}`,
}`$('.t-no-header .legal-hero.o-hero.v--short')
  .css('background-color')`,


`$('.c-oauth_scope_info__spacer_icon')
  .css('color')`,


`$('.c-oauth_scope_info__dangerous_scopes, .c-oauth_scope_info__safe_scopes')
  .css('border-bottom-color')`,


`$('.c-oauth_scope_info__dangerous_scopes')
  .css('border-left-color')`,
`$('.c-oauth_scope_info__dangerous_scopes')
  .css('border-right-color')`,
`$('.c-oauth_scope_info__dangerous_scopes')
  .css('border-top-color')`,


`$('.c-oauth_scope_info__dangerous_scope:not(:first-child), .c-oauth_scope_info__safe_scope')
  .css('border-top-color')`,


`$('a.p-oauth_nav__anchor')
  .css('color')`,


`$('.p-oauth_nav__team-switcher .menu_launcher')
  .css('border-color')`,


`$('.p-oauth_nav__team-switcher .menu_launcher:hover')
  .css('border')`,


`$('.p-oauth_page, .p-oauth_page--error')
  .css('background')`,


`$('.p-oauth_page__title')
  .css('color')`,


`$('.p-oauth_page_single_channel_picker')
  .css('border-bottom-color')`,


`$('ts-rocket')
  .css('color')`,


`$('ts-rocket a')
  .css('color')`,


`$('ts-rocket a caret::before')
  .css('background-color')`,
`$('ts-rocket a caret::before')
  .css('border-color')`,


`$('ts-rocket hr')
  .css('border-color')`,


`$('ts-rocket code, ts-rocket .pre.text, ts-rocket>div>pre')
  .css('background-color')`,


`$('ts-rocket .blockquote.text::before, ts-rocket>div>blockquote::before')
  .css('background-color')`,


`$('ts-rocket .cl.text')
  .css('background-color')`,
`$('ts-rocket .cl.text')
  .css('border-bottom')`,


`$('ts-rocket .cl.text .checkbox.checked+li')
  .css('color')`,


`$('ts-rocket>div>.checklist')
  .css('background-color')`,
`$('ts-rocket>div>.checklist')
  .css('border-bottom')`,


`$('ts-rocket>div>.checklist .checkbox.checked+li')
  .css('color')`,


`$('ts-rocket>div>.checklist li::before')
  .css('background')`,


`$('ts-rocket>div>.checklist li.checked')
  .css('color')`,


`$('ts-rocket .unfurl .unfurl-container')
  .css('background-color')`,


`$('ts-rocket .unfurl .unfurl-container.unfurl-render-failed')
  .css('background-color')`,


`$('ts-rocket .unfurl .attachment_bar')
  .css('background-color')`,


`$('ts-rocket .unfurl .unfurl-remove::before')
  .css('color')`,


`$('ts-rocket .unfurl .unfurl-remove:hover::before')
  .css('color')`,


`$('ts-rocket .unfurl.selected .unfurl-container')
  .css('background-color')`,


`$('ts-rocket .unfurl.selected .unfurl-container .attachment_bar')
  .css('background-color')`,


`$('ts-rocket caret::before')
  .css('background-color')`,
`$('ts-rocket caret::before')
  .css('border')`,


`$('ts-rocket carriage')
  .css('background-color')`,


`$('ts-rocket selection')
  .css('background-color')`,


`$('ts-rocket selection::after, ts-rocket selection::before')
  .css('background-color')`,


`$('ts-rocket ime')
  .css('background-color')`,


`$('ts-rocket .hr.selected hr')
  .css('box-shadow')`,


`$('.focusing_input_field space.inactive .unfurl.selected .unfurl-container')
  .css('background-color')`,


`$('nav')
  .css('background')`,


`$('nav .space')
  .css('background-color')`,
`$('nav .space')
  .css('box-shadow')`,


`$('nav .space::after')
  .css('border-left')`,


`$('nav .comments')
  .css('background-color')`,


`$('nav .space_buttons .btn_outline')
  .css('background-color')`,


`$('nav .space_buttons .btn_outline::after')
  .css('border-color')`,


`$('nav .space_btn_star')
  .css('background')`,
`$('nav .space_btn_star')
  .css('border')`,


`$('nav .space_btn_star:hover')
  .css('background')`,


`$('nav .space_btn_edit')
  .css('background')`,


`$('nav .space_btn_edit.editing')
  .css('background')`,


`$('nav .star_info')
  .css('color')`,


`$('nav #space_status')
  .css('border-left')`,
`$('nav #space_status')
  .css('color')`,


`$('nav #space_status.slightly_concerned')
  .css('color')`,


`$('nav #edit_status')
  .css('color')`,


`$('nav .comments_open.unread span.notif')
  .css('background-color')`,
`$('nav .comments_open.unread span.notif')
  .css('box-shadow')`,


`$('nav .comments_close')
  .css('color')`,


`$('nav .comments_close:hover::before')
  .css('color')`,


`$('ts-space header')
  .css('background')`,


`$('ts-space header .owner_detail .file_title_header, ts-space header .owner_detail .inline-edit')
  .css('color')`,


`$('ts-space header .owner_detail .inline-edit')
  .css('background')`,


`$('ts-space header .owner_detail .inline-edit::-webkit-input-placeholder')
  .css('color')`,


`$('ts-space header .owner_detail .inline-edit::-moz-placeholder')
  .css('color')`,


`$('ts-space header .owner_detail .inline-edit:focus::-webkit-input-placeholder')
  .css('color')`,


`$('ts-space header .owner_detail .inline-edit:focus::-moz-placeholder')
  .css('color')`,


`$('ts-space header .owner_detail ::selection, ts-space header .owner_detail ::-moz-selection')
  .css('background-color')`,


`$('ts-space header .owner_detail small')
  .css('color')`,


`$('ts-space header .divider')
  .css('border-top')`,


`$('ts-space a.feedback')
  .css('color')`,
`$('ts-space a.feedback')
  .css('text-shadow')`,


`$('ts-space a.feedback:hover')
  .css('background-color')`,
`$('ts-space a.feedback:hover')
  .css('color')`,


`$('comments')
  .css('box-shadow')`,


`$('#space_alert')
  .css('background-color')`,
`$('#space_alert')
  .css('box-shadow')`,


`$('#space_alert.error')
  .css('background-color')`,


`$('#space_alert span#space_alert_text')
  .css('color')`,


`$('#space_alert a')
  .css('color')`,


`$('#space_alert button#space_alert_close::before')
  .css('color')`,


`$('#space_alert button#space_alert_close:hover::before')
  .css('color')`,


`$('#space_alert .btn_outline.btn_transparent')
  .css('background-color')`,
`$('#space_alert .btn_outline.btn_transparent')
  .css('color')`,


`$('#space_alert .btn_outline.btn_transparent::after')
  .css('border-color')`,


`$('#space_find_bar')
  .css('background-color')`,
`$('#space_find_bar')
  .css('border-bottom')`,
`$('#space_find_bar')
  .css('border-left')`,
`$('#space_find_bar')
  .css('border-right')`,
`$('#space_find_bar')
  .css('box-shadow')`,


`$('#space_find_bar #space_find_info.no_matches')
  .css('color')`,


`$('#space_find_bar #space_find_next .ts_icon')
  .css('background-color')`,


`$('#space_find_bar #space_find_next .ts_icon::before, #space_find_bar #space_find_next .ts_icon:hover::before')
  .css('color')`,


`$('#space_find_bar #space_find_next:hover .ts_icon')
  .css('background-color')`,


`$('#space_find_bar #space_find_close::before')
  .css('color')`,


`$('#space_find_bar #space_find_close:hover::before')
  .css('color')`,


`$('#connected_members .connected_members_count')
  .css('color')`,
`$('#connected_members .connected_members_count')
  .css('text-shadow')`,


`$('#connected_members .toggle_more_members_popover')
  .css('background')`,
`$('#connected_members .toggle_more_members_popover')
  .css('color')`,


`$('#connected_members_overflow_popover')
  .css('border-bottom')`,
`$('#connected_members_overflow_popover')
  .css('border-left')`,
`$('#connected_members_overflow_popover')
  .css('border-right')`,
`$('#connected_members_overflow_popover')
  .css('border-top')`,
`$('#connected_members_overflow_popover')
  .css('box-shadow')`,


`$('#connected_members_overflow_popover .arrow::after')
  .css('background-color')`,


`$('#connected_members_overflow_popover .arrow_shadow::after')
  .css('background-color')`,
`$('#connected_members_overflow_popover .arrow_shadow::after')
  .css('box-shadow')`,


`$('#connected_members_overflow_popover .monkey_scroll_wrapper')
  .css('background')`,


`$('#connection_status #connection_label')
  .css('color')`,
`$('#connection_status #connection_label')
  .css('text-shadow')`,


`$('#shortcuts_spaces_dialog')
  .css('background-color')`,
`$('#shortcuts_spaces_dialog')
  .css('text-shadow')`,


`$('#shortcuts_spaces_dialog .modal-body')
  .css('color')`,


`$('#shortcuts_spaces_dialog .col .keyboard')
  .css('background-color')`,
`$('#shortcuts_spaces_dialog .col .keyboard')
  .css('border-bottom')`,
`$('#shortcuts_spaces_dialog .col .keyboard')
  .css('box-shadow')`,
`$('#shortcuts_spaces_dialog .col .keyboard')
  .css('color')`,


`$('#shortcuts_spaces_dialog .close:hover')
  .css('background-color')`,


`$('#shortcuts_spaces_dialog .close .ts_icon::before')
  .css('color')`,


`$('.textstyle_menu .arrow-shadow::after')
  .css('background-color')`,
`$('.textstyle_menu .arrow-shadow::after')
  .css('box-shadow')`,


`$('.textstyle_menu .arrow::after')
  .css('background-color')`,


`$('.textstyle_menu .content')
  .css('background-color')`,
`$('.textstyle_menu .content')
  .css('box-shadow')`,


`$('.textstyle_menu.link .arrow-shadow::after')
  .css('background-color')`,


`$('.textstyle_menu.link .arrow::after')
  .css('background-color')`,


`$('.textstyle_menu.link .content')
  .css('background-color')`,
`$('.textstyle_menu.link .content')
  .css('box-shadow')`,


`$('.textstyle_menu.link .content input[type=text]')
  .css('background-color')`,


`$('.textstyle_menu.link .content>a.link')
  .css('color')`,


`$('.textstyle_menu.link .content ::-webkit-input-placeholder, .textstyle_menu.link .content ::-moz-placeholder')
  .css('color')`,


`$('.textstyle_menu.link .content .buttons a.item.active, .textstyle_menu.link .content .buttons a.item:hover')
  .css('background-color')`,


`$('.textstyle_menu .buttons a:hover, .textstyle_menu.style a:hover')
  .css('border')`,


`$('.textstyle_menu .buttons a.active, .textstyle_menu.style a.active')
  .css('background-color')`,
`$('.textstyle_menu .buttons a.active, .textstyle_menu.style a.active')
  .css('border')`,


`$('.textstyle_menu.style a.deformat::before')
  .css('border-left')`,


`$('.textstyle_menu .buttons a.link_unfurl:not(.unfurl_pending) span::before')
  .css('color')`,


`$('.para_menu .insert .tip')
  .css('color')`,


`$('.para_menu .insert .tooltip .arrow-shadow::after')
  .css('background-color')`,
`$('.para_menu .insert .tooltip .arrow-shadow::after')
  .css('box-shadow')`,


`$('.para_menu .insert .tooltip .arrow::after')
  .css('background-color')`,


`$('.para_menu .insert .tooltip .content')
  .css('background-color')`,
`$('.para_menu .insert .tooltip .content')
  .css('box-shadow')`,


`$('.para_menu .format .options .arrow-shadow::after')
  .css('background-color')`,
`$('.para_menu .format .options .arrow-shadow::after')
  .css('box-shadow')`,


`$('.para_menu .format .options .arrow::after')
  .css('background-color')`,


`$('.para_menu .format .options .arrow-shadow.bottom::after')
  .css('box-shadow')`,


`$('.para_menu .format .options .content')
  .css('background-color')`,
`$('.para_menu .format .options .content')
  .css('box-shadow')`,


`$('.para_menu .format .options .content ul:first-child')
  .css('border-bottom')`,


`$('.para_menu .format .options.show .tooltip>div')
  .css('background-color')`,
`$('.para_menu .format .options.show .tooltip>div')
  .css('box-shadow')`,
`$('.para_menu .format .options.show .tooltip>div')
  .css('color')`,


`$('.para_menu .format .options.show .tooltip span')
  .css('background-color')`,


`$('.para_menu .options a:hover')
  .css('border')`,


`$('.para_menu .options a.active')
  .css('background-color')`,
`$('.para_menu .options a.active')
  .css('border')`,


`$('.para_menu .options a.active span')
  .css('filter')`,


`$('.para_menu .options a span')
  .css('filter')`,


`$('.para_menu a.trigger.pilcrow')
  .css('filter')`,


`$('.para_menu a.trigger.pilcrow:hover, .para_menu a.trigger.pilcrow.active')
  .css('filter')`,

