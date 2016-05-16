QuijoteipsumView = require './quijoteipsum-view'
{CompositeDisposable} = require 'atom'

module.exports = Quijoteipsum =
  quijoteipsumView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @quijoteipsumView = new QuijoteipsumView(state.quijoteipsumViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @quijoteipsumView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'quijoteipsum:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @quijoteipsumView.destroy()

  serialize: ->
    quijoteipsumViewState: @quijoteipsumView.serialize()

  toggle: ->
    console.log 'Quijoteipsum was toggled!'

    if @modalPanel.isVisible()
      @modalPanel.hide()
    else
      @modalPanel.show()
