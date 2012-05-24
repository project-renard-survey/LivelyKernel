module('lively.morphic.StyleSheets').requires().toRun(function() {

    lively.morphic.Morph.addMethods(
        'stylesheets', {
            applyStyleSheet: function(style) {


                morph.setNodeId();
                morphId = morph.getNodeId();
        
                var specificCss = "#"+morphId+" { "+cssCode+" }";
                var styleTagId = "style-"+morphId;
        
                var styleNode = document.getElementById(styleTagId);
                console.log(styleNode);
                if(styleNode) {
                    styleNode.parentNode.removeChild(styleNode);
                }
        
                var head = document.head;  
                var newStyleNode = document.createElement('style');
                newStyleNode.type = 'text/css';
                newStyleNode.id = styleTagId;
                var newStyleContent = document.createTextNode(specificCss);
                if (newStyleNode.styleSheet) {
                    newStyleNode.styleSheet.cssText = newStyleContent.nodeValue;
                }
                else {
                    newStyleNode.appendChild(newStyleContent);
                }
                head.appendChild(newStyleNode);


            }
        }
    )

}) // end of module