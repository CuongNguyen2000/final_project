﻿CKEDITOR.dialog.add('scaytDialog', function (d) {
    var c = d.scayt,
        k =
            '\x3cp\x3e\x3cimg alt\x3d"logo" title\x3d"logo" src\x3d"' +
            c.getLogo() +
            '" /\x3e\x3c/p\x3e\x3cp\x3e' +
            c.getLocal('version') +
            c.getVersion() +
            '\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"' +
            c.getOption('CKUserManual') +
            '" target\x3d"_blank" style\x3d"text-decoration: underline; color: blue; cursor: pointer;"\x3e' +
            c.getLocal('btn_userManual') +
            '\x3c/a\x3e\x3c/p\x3e\x3cp\x3e' +
            c.getLocal('text_copyrights') +
            '\x3c/p\x3e',
        n = CKEDITOR.document,
        l = {
            isChanged: function () {
                return null === this.newLang ||
                    this.currentLang === this.newLang
                    ? !1
                    : !0;
            },
            currentLang: c.getLang(),
            newLang: null,
            reset: function () {
                this.currentLang = c.getLang();
                this.newLang = null;
            },
            id: 'lang',
        },
        k = [
            {
                id: 'options',
                label: c.getLocal('tab_options'),
                onShow: function () {},
                elements: [
                    {
                        type: 'vbox',
                        id: 'scaytOptions',
                        children: (function () {
                            var b = c.getApplicationConfig(),
                                a = [],
                                g = {
                                    'ignore-all-caps-words': 'label_allCaps',
                                    'ignore-domain-names':
                                        'label_ignoreDomainNames',
                                    'ignore-words-with-mixed-cases':
                                        'label_mixedCase',
                                    'ignore-words-with-numbers':
                                        'label_mixedWithDigits',
                                },
                                h;
                            for (h in b)
                                (b = { type: 'checkbox' }),
                                    (b.id = h),
                                    (b.label = c.getLocal(g[h])),
                                    a.push(b);
                            return a;
                        })(),
                        onShow: function () {
                            this.getChild();
                            for (
                                var b = d.scayt, a = 0;
                                a < this.getChild().length;
                                a++
                            )
                                this.getChild()[a].setValue(
                                    b.getApplicationConfig()[
                                        this.getChild()[a].id
                                    ]
                                );
                        },
                    },
                ],
            },
            {
                id: 'langs',
                label: c.getLocal('tab_languages'),
                elements: [
                    {
                        id: 'leftLangColumn',
                        type: 'vbox',
                        align: 'left',
                        widths: ['100'],
                        children: [
                            {
                                type: 'html',
                                id: 'langBox',
                                style: 'overflow: hidden; white-space: normal;margin-bottom:15px;',
                                html:
                                    '\x3cdiv\x3e\x3cdiv style\x3d"float:left;width:45%;margin-left:5px;" id\x3d"left-col-' +
                                    d.name +
                                    '" class\x3d"scayt-lang-list"\x3e\x3c/div\x3e\x3cdiv style\x3d"float:left;width:45%;margin-left:15px;" id\x3d"right-col-' +
                                    d.name +
                                    '" class\x3d"scayt-lang-list"\x3e\x3c/div\x3e\x3c/div\x3e',
                                onShow: function () {
                                    var b = d.scayt.getLang();
                                    n.getById(
                                        'scaytLang_' + d.name + '_' + b
                                    ).$.checked = !0;
                                },
                            },
                        ],
                    },
                ],
            },
            {
                id: 'dictionaries',
                label: c.getLocal('tab_dictionaries'),
                elements: [
                    {
                        type: 'vbox',
                        id: 'rightCol_col__left',
                        children: [
                            { type: 'html', id: 'dictionaryNote', html: '' },
                            {
                                type: 'text',
                                id: 'dictionaryName',
                                label:
                                    c.getLocal('label_fieldNameDic') ||
                                    'Dictionary name',
                                onShow: function (b) {
                                    var a = b.sender,
                                        g = d.scayt;
                                    b = SCAYT.prototype.UILib;
                                    var h = a
                                        .getContentElement(
                                            'dictionaries',
                                            'dictionaryName'
                                        )
                                        .getInputElement().$;
                                    g.isLicensed() ||
                                        ((h.disabled = !0),
                                        b.css(h, { cursor: 'not-allowed' }));
                                    setTimeout(function () {
                                        a.getContentElement(
                                            'dictionaries',
                                            'dictionaryNote'
                                        )
                                            .getElement()
                                            .setText('');
                                        null != g.getUserDictionaryName() &&
                                            '' != g.getUserDictionaryName() &&
                                            a
                                                .getContentElement(
                                                    'dictionaries',
                                                    'dictionaryName'
                                                )
                                                .setValue(
                                                    g.getUserDictionaryName()
                                                );
                                    }, 0);
                                },
                            },
                            {
                                type: 'hbox',
                                id: 'udButtonsHolder',
                                align: 'left',
                                widths: ['auto'],
                                style: 'width:auto;',
                                children: [
                                    {
                                        type: 'button',
                                        id: 'createDic',
                                        label: c.getLocal('btn_createDic'),
                                        title: c.getLocal('btn_createDic'),
                                        onLoad: function () {
                                            this.getDialog();
                                            var b = d.scayt,
                                                a = SCAYT.prototype.UILib,
                                                g = this.getElement().$,
                                                h =
                                                    this.getElement().getChild(
                                                        0
                                                    ).$;
                                            b.isLicensed() ||
                                                (a.css(g, {
                                                    cursor: 'not-allowed',
                                                }),
                                                a.css(h, {
                                                    cursor: 'not-allowed',
                                                }));
                                        },
                                        onClick: function () {
                                            var b = this.getDialog(),
                                                a = f,
                                                g = d.scayt,
                                                h = b
                                                    .getContentElement(
                                                        'dictionaries',
                                                        'dictionaryName'
                                                    )
                                                    .getValue();
                                            g.isLicensed() &&
                                                g.createUserDictionary(
                                                    h,
                                                    function (e) {
                                                        e.error ||
                                                            a.toggleDictionaryState.call(
                                                                b,
                                                                'dictionaryState'
                                                            );
                                                        e.dialog = b;
                                                        e.command = 'create';
                                                        e.name = h;
                                                        d.fire(
                                                            'scaytUserDictionaryAction',
                                                            e
                                                        );
                                                    },
                                                    function (a) {
                                                        a.dialog = b;
                                                        a.command = 'create';
                                                        a.name = h;
                                                        d.fire(
                                                            'scaytUserDictionaryActionError',
                                                            a
                                                        );
                                                    }
                                                );
                                        },
                                    },
                                    {
                                        type: 'button',
                                        id: 'restoreDic',
                                        label: c.getLocal('btn_connectDic'),
                                        title: c.getLocal('btn_connectDic'),
                                        onLoad: function () {
                                            this.getDialog();
                                            var b = d.scayt,
                                                a = SCAYT.prototype.UILib,
                                                g = this.getElement().$,
                                                h =
                                                    this.getElement().getChild(
                                                        0
                                                    ).$;
                                            b.isLicensed() ||
                                                (a.css(g, {
                                                    cursor: 'not-allowed',
                                                }),
                                                a.css(h, {
                                                    cursor: 'not-allowed',
                                                }));
                                        },
                                        onClick: function () {
                                            var b = this.getDialog(),
                                                a = d.scayt,
                                                g = f,
                                                h = b
                                                    .getContentElement(
                                                        'dictionaries',
                                                        'dictionaryName'
                                                    )
                                                    .getValue();
                                            a.isLicensed() &&
                                                a.restoreUserDictionary(
                                                    h,
                                                    function (a) {
                                                        a.dialog = b;
                                                        a.error ||
                                                            g.toggleDictionaryState.call(
                                                                b,
                                                                'dictionaryState'
                                                            );
                                                        a.command = 'restore';
                                                        a.name = h;
                                                        d.fire(
                                                            'scaytUserDictionaryAction',
                                                            a
                                                        );
                                                    },
                                                    function (a) {
                                                        a.dialog = b;
                                                        a.command = 'restore';
                                                        a.name = h;
                                                        d.fire(
                                                            'scaytUserDictionaryActionError',
                                                            a
                                                        );
                                                    }
                                                );
                                        },
                                    },
                                    {
                                        type: 'button',
                                        id: 'disconnectDic',
                                        label: c.getLocal('btn_disconnectDic'),
                                        title: c.getLocal('btn_disconnectDic'),
                                        onClick: function () {
                                            var b = this.getDialog(),
                                                a = d.scayt,
                                                g = f,
                                                h = b.getContentElement(
                                                    'dictionaries',
                                                    'dictionaryName'
                                                ),
                                                e = h.getValue();
                                            a.isLicensed() &&
                                                (a.disconnectFromUserDictionary(
                                                    {}
                                                ),
                                                h.setValue(''),
                                                g.toggleDictionaryState.call(
                                                    b,
                                                    'initialState'
                                                ),
                                                d.fire(
                                                    'scaytUserDictionaryAction',
                                                    {
                                                        dialog: b,
                                                        command: 'disconnect',
                                                        name: e,
                                                    }
                                                ));
                                        },
                                    },
                                    {
                                        type: 'button',
                                        id: 'removeDic',
                                        label: c.getLocal('btn_deleteDic'),
                                        title: c.getLocal('btn_deleteDic'),
                                        onClick: function () {
                                            var b = this.getDialog(),
                                                a = d.scayt,
                                                g = f,
                                                h = b.getContentElement(
                                                    'dictionaries',
                                                    'dictionaryName'
                                                ),
                                                e = h.getValue();
                                            a.isLicensed() &&
                                                a.removeUserDictionary(
                                                    e,
                                                    function (a) {
                                                        h.setValue('');
                                                        a.error ||
                                                            g.toggleDictionaryState.call(
                                                                b,
                                                                'initialState'
                                                            );
                                                        a.dialog = b;
                                                        a.command = 'remove';
                                                        a.name = e;
                                                        d.fire(
                                                            'scaytUserDictionaryAction',
                                                            a
                                                        );
                                                    },
                                                    function (a) {
                                                        a.dialog = b;
                                                        a.command = 'remove';
                                                        a.name = e;
                                                        d.fire(
                                                            'scaytUserDictionaryActionError',
                                                            a
                                                        );
                                                    }
                                                );
                                        },
                                    },
                                    {
                                        type: 'button',
                                        id: 'renameDic',
                                        label: c.getLocal('btn_renameDic'),
                                        title: c.getLocal('btn_renameDic'),
                                        onClick: function () {
                                            var b = this.getDialog(),
                                                a = d.scayt,
                                                g = b
                                                    .getContentElement(
                                                        'dictionaries',
                                                        'dictionaryName'
                                                    )
                                                    .getValue();
                                            a.isLicensed() &&
                                                a.renameUserDictionary(
                                                    g,
                                                    function (a) {
                                                        a.dialog = b;
                                                        a.command = 'rename';
                                                        a.name = g;
                                                        d.fire(
                                                            'scaytUserDictionaryAction',
                                                            a
                                                        );
                                                    },
                                                    function (a) {
                                                        a.dialog = b;
                                                        a.command = 'rename';
                                                        a.name = g;
                                                        d.fire(
                                                            'scaytUserDictionaryActionError',
                                                            a
                                                        );
                                                    }
                                                );
                                        },
                                    },
                                    {
                                        type: 'button',
                                        id: 'editDic',
                                        label: c.getLocal('btn_goToDic'),
                                        title: c.getLocal('btn_goToDic'),
                                        onLoad: function () {
                                            this.getDialog();
                                        },
                                        onClick: function () {
                                            var b = this.getDialog(),
                                                a = b.getContentElement(
                                                    'dictionaries',
                                                    'addWordField'
                                                );
                                            f.clearWordList.call(b);
                                            a.setValue('');
                                            f.getUserDictionary.call(b);
                                            f.toggleDictionaryState.call(
                                                b,
                                                'wordsState'
                                            );
                                        },
                                    },
                                ],
                            },
                            {
                                type: 'hbox',
                                id: 'dicInfo',
                                align: 'left',
                                children: [
                                    {
                                        type: 'html',
                                        id: 'dicInfoHtml',
                                        html:
                                            '\x3cdiv id\x3d"dic_info_editor1" style\x3d"margin:5px auto; width:95%;white-space:normal;"\x3e' +
                                            (d.scayt.isLicensed &&
                                            d.scayt.isLicensed()
                                                ? '\x3ca href\x3d"' +
                                                  c.getOption('CKUserManual') +
                                                  '" target\x3d"_blank" style\x3d"text-decoration: underline; color: blue; cursor: pointer;"\x3e' +
                                                  c.getLocal(
                                                      'text_descriptionDicForPaid'
                                                  ) +
                                                  '\x3c/a\x3e'
                                                : c.getLocal(
                                                      'text_descriptionDicForFree'
                                                  )) +
                                            '\x3c/div\x3e',
                                    },
                                ],
                            },
                            {
                                id: 'addWordAction',
                                type: 'hbox',
                                style: 'width: 100%; margin-bottom: 0;',
                                widths: ['40%', '60%'],
                                children: [
                                    {
                                        id: 'addWord',
                                        type: 'vbox',
                                        style: 'min-width: 150px;',
                                        children: [
                                            {
                                                type: 'text',
                                                id: 'addWordField',
                                                label: 'Add word',
                                                maxLength: '64',
                                            },
                                        ],
                                    },
                                    {
                                        id: 'addWordButtons',
                                        type: 'vbox',
                                        style: 'margin-top: 20px;',
                                        children: [
                                            {
                                                type: 'hbox',
                                                id: 'addWordButton',
                                                align: 'left',
                                                children: [
                                                    {
                                                        type: 'button',
                                                        id: 'addWord',
                                                        label: c.getLocal(
                                                            'btn_addWord'
                                                        ),
                                                        title: c.getLocal(
                                                            'btn_addWord'
                                                        ),
                                                        onClick: function () {
                                                            var b =
                                                                    this.getDialog(),
                                                                a = d.scayt,
                                                                g =
                                                                    b.getContentElement(
                                                                        'dictionaries',
                                                                        'itemList'
                                                                    ),
                                                                h =
                                                                    b.getContentElement(
                                                                        'dictionaries',
                                                                        'addWordField'
                                                                    ),
                                                                e =
                                                                    h.getValue(),
                                                                c =
                                                                    a.getOption(
                                                                        'wordBoundaryRegex'
                                                                    ),
                                                                f = this;
                                                            e &&
                                                                (-1 !==
                                                                e.search(c)
                                                                    ? d.fire(
                                                                          'scaytUserDictionaryAction',
                                                                          {
                                                                              dialog: b,
                                                                              command:
                                                                                  'wordWithBannedSymbols',
                                                                              name: e,
                                                                              error: !0,
                                                                          }
                                                                      )
                                                                    : g.inChildren(
                                                                          e
                                                                      )
                                                                    ? (h.setValue(
                                                                          ''
                                                                      ),
                                                                      d.fire(
                                                                          'scaytUserDictionaryAction',
                                                                          {
                                                                              dialog: b,
                                                                              command:
                                                                                  'wordAlreadyAdded',
                                                                              name: e,
                                                                          }
                                                                      ))
                                                                    : (this.disable(),
                                                                      a.addWordToUserDictionary(
                                                                          e,
                                                                          function (
                                                                              a
                                                                          ) {
                                                                              a.error ||
                                                                                  (h.setValue(
                                                                                      ''
                                                                                  ),
                                                                                  g.addChild(
                                                                                      e,
                                                                                      !0
                                                                                  ));
                                                                              a.dialog =
                                                                                  b;
                                                                              a.command =
                                                                                  'addWord';
                                                                              a.name =
                                                                                  e;
                                                                              f.enable();
                                                                              d.fire(
                                                                                  'scaytUserDictionaryAction',
                                                                                  a
                                                                              );
                                                                          },
                                                                          function (
                                                                              a
                                                                          ) {
                                                                              a.dialog =
                                                                                  b;
                                                                              a.command =
                                                                                  'addWord';
                                                                              a.name =
                                                                                  e;
                                                                              f.enable();
                                                                              d.fire(
                                                                                  'scaytUserDictionaryActionError',
                                                                                  a
                                                                              );
                                                                          }
                                                                      )));
                                                        },
                                                    },
                                                    {
                                                        type: 'button',
                                                        id: 'backToDic',
                                                        label: c.getLocal(
                                                            'btn_dictionaryPreferences'
                                                        ),
                                                        title: c.getLocal(
                                                            'btn_dictionaryPreferences'
                                                        ),
                                                        align: 'right',
                                                        onClick: function () {
                                                            var b =
                                                                    this.getDialog(),
                                                                a = d.scayt;
                                                            null !=
                                                                a.getUserDictionaryName() &&
                                                            '' !=
                                                                a.getUserDictionaryName()
                                                                ? f.toggleDictionaryState.call(
                                                                      b,
                                                                      'dictionaryState'
                                                                  )
                                                                : f.toggleDictionaryState.call(
                                                                      b,
                                                                      'initialState'
                                                                  );
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: 'wordsHolder',
                                type: 'hbox',
                                style: 'width: 100%; height: 170px; margin-bottom: 0;',
                                children: [
                                    {
                                        type: 'scaytItemList',
                                        id: 'itemList',
                                        align: 'left',
                                        style: 'width: 100%; height: 170px; overflow: auto',
                                        onClick: function (b) {
                                            var a = b.data.$;
                                            b = d.scayt;
                                            var g = SCAYT.prototype.UILib,
                                                a = a.target || a.srcElement,
                                                h = g.parent(a)[0],
                                                e = g.attr(
                                                    h,
                                                    'data-cke-scayt-ud-word'
                                                ),
                                                c = this.getDialog(),
                                                f = c.getContentElement(
                                                    'dictionaries',
                                                    'itemList'
                                                ),
                                                q = this;
                                            g.hasClass(
                                                a,
                                                'cke_scaytItemList_remove'
                                            ) &&
                                                !this.isBlocked() &&
                                                (this.block(),
                                                b.deleteWordFromUserDictionary(
                                                    e,
                                                    function (a) {
                                                        a.error ||
                                                            f.removeChild(h, e);
                                                        q.unblock();
                                                        a.dialog = c;
                                                        a.command =
                                                            'deleteWord';
                                                        a.name = e;
                                                        d.fire(
                                                            'scaytUserDictionaryAction',
                                                            a
                                                        );
                                                    },
                                                    function (a) {
                                                        q.unblock();
                                                        a.dialog = c;
                                                        a.command =
                                                            'deleteWord';
                                                        a.name = e;
                                                        d.fire(
                                                            'scaytUserDictionaryActionError',
                                                            a
                                                        );
                                                    }
                                                ));
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 'about',
                label: c.getLocal('tab_about'),
                elements: [
                    {
                        type: 'html',
                        id: 'about',
                        style: 'margin: 5px 5px;',
                        html:
                            '\x3cdiv\x3e\x3cdiv id\x3d"scayt_about_"\x3e' +
                            k +
                            '\x3c/div\x3e\x3c/div\x3e',
                    },
                ],
            },
        ];
    d.on('scaytUserDictionaryAction', function (b) {
        var a = SCAYT.prototype.UILib,
            g = b.data.dialog,
            d = g
                .getContentElement('dictionaries', 'dictionaryNote')
                .getElement(),
            e = b.editor.scayt,
            c;
        void 0 === b.data.error
            ? ((c = e.getLocal('message_success_' + b.data.command + 'Dic')),
              (c = c.replace('%s', b.data.name)),
              d.setText(c),
              a.css(d.$, { color: 'blue' }))
            : ('' === b.data.name
                  ? d.setText(e.getLocal('message_info_emptyDic'))
                  : ((c = e.getLocal(
                        'message_error_' + b.data.command + 'Dic'
                    )),
                    (c = c.replace('%s', b.data.name)),
                    d.setText(c)),
              a.css(d.$, { color: 'red' }),
              null != e.getUserDictionaryName() &&
              '' != e.getUserDictionaryName()
                  ? g
                        .getContentElement('dictionaries', 'dictionaryName')
                        .setValue(e.getUserDictionaryName())
                  : g
                        .getContentElement('dictionaries', 'dictionaryName')
                        .setValue(''));
    });
    d.on('scaytUserDictionaryActionError', function (b) {
        var a = SCAYT.prototype.UILib,
            g = b.data.dialog,
            d = g
                .getContentElement('dictionaries', 'dictionaryNote')
                .getElement(),
            c = b.editor.scayt,
            f;
        '' === b.data.name
            ? d.setText(c.getLocal('message_info_emptyDic'))
            : ((f = c.getLocal('message_error_' + b.data.command + 'Dic')),
              (f = f.replace('%s', b.data.name)),
              d.setText(f));
        a.css(d.$, { color: 'red' });
        null != c.getUserDictionaryName() && '' != c.getUserDictionaryName()
            ? g
                  .getContentElement('dictionaries', 'dictionaryName')
                  .setValue(c.getUserDictionaryName())
            : g
                  .getContentElement('dictionaries', 'dictionaryName')
                  .setValue('');
    });
    var f = {
        title: 'SCAYT',
        resizable: CKEDITOR.DIALOG_RESIZE_BOTH,
        minWidth:
            'moono-lisa' == (CKEDITOR.skinName || d.config.skin) ? 450 : 340,
        minHeight: 300,
        onLoad: function () {
            if (0 != d.config.scayt_uiTabs[1]) {
                var b = f,
                    a = b.getLangBoxes.call(this);
                this.getContentElement('dictionaries', 'addWordField');
                a.getParent().setStyle('white-space', 'normal');
                b.renderLangList(a);
                this.definition.minWidth = this.getSize().width;
                this.resize(
                    this.definition.minWidth,
                    this.definition.minHeight
                );
            }
        },
        onCancel: function () {
            l.reset();
        },
        onHide: function () {
            d.unlockSelection();
        },
        onShow: function () {
            d.fire('scaytDialogShown', this);
            if (0 != d.config.scayt_uiTabs[2]) {
                var b = this.getContentElement('dictionaries', 'addWordField');
                f.clearWordList.call(this);
                b.setValue('');
                f.getUserDictionary.call(this);
                f.toggleDictionaryState.call(this, 'wordsState');
            }
        },
        onOk: function () {
            var b = f,
                a = d.scayt;
            this.getContentElement('options', 'scaytOptions');
            b = b.getChangedOption.call(this);
            a.commitOption({ changedOptions: b });
        },
        toggleDictionaryButtons: function (b) {
            var a = this.getContentElement('dictionaries', 'existDic')
                    .getElement()
                    .getParent(),
                d = this.getContentElement('dictionaries', 'notExistDic')
                    .getElement()
                    .getParent();
            b ? (a.show(), d.hide()) : (a.hide(), d.show());
        },
        getChangedOption: function () {
            var b = {};
            if (1 == d.config.scayt_uiTabs[0])
                for (
                    var a = this.getContentElement(
                            'options',
                            'scaytOptions'
                        ).getChild(),
                        c = 0;
                    c < a.length;
                    c++
                )
                    a[c].isChanged() && (b[a[c].id] = a[c].getValue());
            l.isChanged() &&
                (b[l.id] = d.config.scayt_sLang = l.currentLang = l.newLang);
            return b;
        },
        buildRadioInputs: function (b, a, c) {
            c = new CKEDITOR.dom.element('div');
            var h = 'scaytLang_' + d.name + '_' + a,
                e = CKEDITOR.dom.element.createFromHtml(
                    '\x3cinput id\x3d"' +
                        h +
                        '" type\x3d"radio"  value\x3d"' +
                        a +
                        '" name\x3d"scayt_lang" /\x3e'
                ),
                f = new CKEDITOR.dom.element('label'),
                k = d.scayt;
            c.setStyles({
                'white-space': 'normal',
                position: 'relative',
                'padding-bottom': '2px',
            });
            e.on('click', function (a) {
                l.newLang = a.sender.getValue();
            });
            f.appendText(b);
            f.setAttribute('for', h);
            c.append(e);
            c.append(f);
            a === k.getLang() &&
                (e.setAttribute('checked', !0),
                e.setAttribute('defaultChecked', 'defaultChecked'));
            return c;
        },
        renderLangList: function (b) {
            var a = d.name.replace(/(:|\.|\[|\]|,|=|@)/g, '\\$1'),
                g = b.find('#left-col-' + a).getItem(0);
            b = b.find('#right-col-' + a).getItem(0);
            var h = c.getScaytLangList(),
                a = c.getGraytLangList(),
                e = {},
                f = [],
                k = 0,
                l = !1,
                m;
            for (m in h.ltr) e[m] = h.ltr[m];
            for (m in h.rtl) e[m] = h.rtl[m];
            for (m in e) f.push([m, e[m]]);
            f.sort(function (a, b) {
                var c = 0;
                a[1] > b[1] ? (c = 1) : a[1] < b[1] && (c = -1);
                return c;
            });
            e = {};
            for (l = 0; l < f.length; l++) e[f[l][0]] = f[l][1];
            f = Math.round(f.length / 2);
            for (m in e)
                k++,
                    (l = m in a.ltr || m in a.rtl),
                    this.buildRadioInputs(e[m], m, l).appendTo(k <= f ? g : b);
        },
        getLangBoxes: function () {
            return this.getContentElement('langs', 'langBox').getElement();
        },
        toggleDictionaryState: function (b) {
            var a = this.getContentElement('dictionaries', 'dictionaryName')
                    .getElement()
                    .getParent(),
                c = this.getContentElement('dictionaries', 'udButtonsHolder')
                    .getElement()
                    .getParent(),
                d = this.getContentElement('dictionaries', 'createDic')
                    .getElement()
                    .getParent(),
                e = this.getContentElement('dictionaries', 'restoreDic')
                    .getElement()
                    .getParent(),
                f = this.getContentElement('dictionaries', 'disconnectDic')
                    .getElement()
                    .getParent(),
                l = this.getContentElement('dictionaries', 'removeDic')
                    .getElement()
                    .getParent(),
                k = this.getContentElement('dictionaries', 'renameDic')
                    .getElement()
                    .getParent(),
                m = this.getContentElement('dictionaries', 'dicInfo')
                    .getElement()
                    .getParent(),
                n = this.getContentElement('dictionaries', 'addWordAction')
                    .getElement()
                    .getParent(),
                p = this.getContentElement('dictionaries', 'wordsHolder')
                    .getElement()
                    .getParent();
            switch (b) {
                case 'initialState':
                    a.show();
                    c.show();
                    d.show();
                    e.show();
                    f.hide();
                    l.hide();
                    k.hide();
                    m.show();
                    n.hide();
                    p.hide();
                    break;
                case 'wordsState':
                    a.hide();
                    c.hide();
                    m.hide();
                    n.show();
                    p.show();
                    break;
                case 'dictionaryState':
                    a.show(),
                        c.show(),
                        d.hide(),
                        e.hide(),
                        f.show(),
                        l.show(),
                        k.show(),
                        m.show(),
                        n.hide(),
                        p.hide();
            }
        },
        clearWordList: function () {
            this.getContentElement('dictionaries', 'itemList').removeAllChild();
        },
        getUserDictionary: function () {
            var b = this,
                a = d.scayt;
            a.getUserDictionary(a.getUserDictionaryName(), function (a) {
                a.error || f.renderItemList.call(b, a.wordlist);
            });
        },
        renderItemList: function (b) {
            for (
                var a = this.getContentElement('dictionaries', 'itemList'),
                    c = 0;
                c < b.length;
                c++
            )
                a.addChild(b[c]);
        },
        contents: (function (b, a) {
            var c = [],
                d = a.config.scayt_uiTabs;
            if (d) {
                for (var e in d) 1 == d[e] && c.push(b[e]);
                c.push(b[b.length - 1]);
            } else return b;
            return c;
        })(k, d),
    };
    return f;
});
CKEDITOR.tools.extend(CKEDITOR.ui.dialog, {
    scaytItemList: function (d, c, k) {
        if (arguments.length) {
            var n = this;
            d.on('load', function () {
                n.getElement().on('click', function (c) {});
            });
            CKEDITOR.ui.dialog.uiElement.call(
                this,
                d,
                c,
                k,
                '',
                null,
                null,
                function () {
                    var d = ['\x3cp class\x3d"cke_dialog_ui_', c.type, '"'];
                    c.style && d.push('style\x3d"' + c.style + '" ');
                    d.push('\x3e');
                    d.push('\x3c/p\x3e');
                    return d.join('');
                }
            );
        }
    },
});
CKEDITOR.ui.dialog.scaytItemList.prototype = CKEDITOR.tools.extend(
    new CKEDITOR.ui.dialog.uiElement(),
    {
        children: [],
        blocked: !1,
        addChild: function (d, c) {
            var k = new CKEDITOR.dom.element('p'),
                n = new CKEDITOR.dom.element('a'),
                l = this.getElement().getChildren().getItem(0);
            this.children.push(d);
            k.addClass('cke_scaytItemList-child');
            k.setAttribute('data-cke-scayt-ud-word', d);
            k.appendText(d);
            n.addClass('cke_scaytItemList_remove');
            n.addClass('cke_dialog_close_button');
            n.setAttribute('href', 'javascript:void(0)');
            k.append(n);
            l.append(k, c ? !0 : !1);
        },
        inChildren: function (d) {
            return SCAYT.prototype.Utils.inArray(this.children, d);
        },
        removeChild: function (d, c) {
            this.children.splice(
                SCAYT.prototype.Utils.indexOf(this.children, c),
                1
            );
            this.getElement().getChildren().getItem(0).$.removeChild(d);
        },
        removeAllChild: function () {
            this.children = [];
            this.getElement().getChildren().getItem(0).setHtml('');
        },
        block: function () {
            this.blocked = !0;
        },
        unblock: function () {
            this.blocked = !1;
        },
        isBlocked: function () {
            return this.blocked;
        },
    }
);
(function () {
    commonBuilder = {
        build: function (d, c, k) {
            return new CKEDITOR.ui.dialog[c.type](d, c, k);
        },
    };
    CKEDITOR.dialog.addUIElement('scaytItemList', commonBuilder);
})();
