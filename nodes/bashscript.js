module.exports = function(RED) {
  function PythonFunctionNode(config) {
    RED.nodes.createNode(this,config);
    var node = this;
    this.on('input', function(msg) {
       // does nothing. But this could probably run interactively!?
    });
  }
  RED.nodes.registerType("bash-script",PythonFunctionNode);
}
