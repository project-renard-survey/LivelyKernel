module('lively.ast.generated.Translator').requires().toRun(function() {
JSTranslator=Object.delegated(Parser,{
"trans":function(){var $elf=this,t,ans;return (function(){this._form((function(){return (function(){t=this._apply("anything");return ans=this._applyWithArgs("apply",t)}).call(this)}));return ans}).call(this)},
"begin":function(){var $elf=this,pos,children;return (function(){pos=this._apply("anything");children=this._many((function(){return this._apply("trans")}));this._apply("end");return new lively.ast.Sequence(pos,children)}).call(this)},
"number":function(){var $elf=this,pos,value;return (function(){pos=this._apply("anything");value=this._apply("anything");return new lively.ast.Number(pos,value)}).call(this)},
"string":function(){var $elf=this,pos,value;return (function(){pos=this._apply("anything");value=this._apply("anything");return new lively.ast.String(pos,value)}).call(this)},
"condExpr":function(){var $elf=this,pos,condExpr,trueExpr,falseExpr;return (function(){pos=this._apply("anything");condExpr=this._apply("trans");trueExpr=this._apply("trans");falseExpr=this._apply("trans");return new lively.ast.Cond(pos,condExpr,trueExpr,falseExpr)}).call(this)},
"if":function(){var $elf=this,pos,condExpr,trueExpr,falseExpr;return (function(){pos=this._apply("anything");condExpr=this._apply("trans");trueExpr=this._apply("trans");falseExpr=this._apply("trans");return new lively.ast.If(pos,condExpr,trueExpr,falseExpr)}).call(this)},
"while":function(){var $elf=this,pos,condExpr,body;return (function(){pos=this._apply("anything");condExpr=this._apply("trans");body=this._apply("trans");return new lively.ast.While(pos,condExpr,body)}).call(this)},
"doWhile":function(){var $elf=this,pos,body,condExpr;return (function(){pos=this._apply("anything");body=this._apply("trans");condExpr=this._apply("trans");return new lively.ast.DoWhile(pos,body,condExpr)}).call(this)},
"for":function(){var $elf=this,pos,init,condExpr,upd,body;return (function(){pos=this._apply("anything");init=this._apply("trans");condExpr=this._apply("trans");upd=this._apply("trans");body=this._apply("trans");return new lively.ast.For(pos,init,condExpr,upd,body)}).call(this)},
"forIn":function(){var $elf=this,pos,name,obj,body;return (function(){pos=this._apply("anything");name=this._apply("trans");obj=this._apply("trans");body=this._apply("trans");return new lively.ast.ForIn(pos,name,obj,body)}).call(this)},
"set":function(){var $elf=this,pos,left,right;return (function(){pos=this._apply("anything");left=this._apply("trans");right=this._apply("trans");return new lively.ast.Set(pos,left,right)}).call(this)},
"mset":function(){var $elf=this,pos,left,name,right;return (function(){pos=this._apply("anything");left=this._apply("trans");name=this._apply("anything");right=this._apply("trans");return new lively.ast.ModifyingSet(pos,left,name,right)}).call(this)},
"binop":function(){var $elf=this,pos,name,left,right;return (function(){pos=this._apply("anything");name=this._apply("anything");left=this._apply("trans");right=this._apply("trans");return new lively.ast.BinaryOp(pos,name,left,right)}).call(this)},
"unop":function(){var $elf=this,pos,name,expr;return (function(){pos=this._apply("anything");name=this._apply("anything");expr=this._apply("trans");return new lively.ast.UnaryOp(pos,name,expr)}).call(this)},
"preop":function(){var $elf=this,pos,name,expr;return (function(){pos=this._apply("anything");name=this._apply("anything");expr=this._apply("trans");return new lively.ast.PreOp(pos,name,expr)}).call(this)},
"postop":function(){var $elf=this,pos,name,expr;return (function(){pos=this._apply("anything");name=this._apply("anything");expr=this._apply("trans");return new lively.ast.PostOp(pos,name,expr)}).call(this)},
"this":function(){var $elf=this,pos;return (function(){pos=this._apply("anything");return new lively.ast.This(pos)}).call(this)},
"get":function(){var $elf=this,pos,name;return (function(){pos=this._apply("anything");name=this._apply("anything");return new lively.ast.Variable(pos,name)}).call(this)},
"getp":function(){var $elf=this,pos,slotName,obj;return (function(){pos=this._apply("anything");slotName=this._apply("trans");obj=this._apply("trans");return new lively.ast.GetSlot(pos,slotName,obj)}).call(this)},
"break":function(){var $elf=this,pos;return (function(){pos=this._apply("anything");return new lively.ast.Break(pos)}).call(this)},
"debugger":function(){var $elf=this,pos;return (function(){pos=this._apply("anything");return new lively.ast.Debugger(pos)}).call(this)},
"continue":function(){var $elf=this,pos;return (function(){pos=this._apply("anything");return new lively.ast.Continue(pos)}).call(this)},
"arr":function(){var $elf=this,pos,elements;return (function(){pos=this._apply("anything");elements=this._many((function(){return this._apply("trans")}));return new lively.ast.ArrayLiteral(pos,elements)}).call(this)},
"return":function(){var $elf=this,pos,expr;return (function(){pos=this._apply("anything");expr=this._apply("trans");return new lively.ast.Return(pos,expr)}).call(this)},
"with":function(){var $elf=this,pos,obj,body;return (function(){pos=this._apply("anything");obj=this._apply("trans");body=this._apply("trans");return new lively.ast.With(pos,obj,body)}).call(this)},
"send":function(){var $elf=this,pos,property,recv,args;return (function(){pos=this._apply("anything");property=this._apply("trans");recv=this._apply("trans");args=this._many((function(){return this._apply("trans")}));return new lively.ast.Send(pos,property,recv,args)}).call(this)},
"call":function(){var $elf=this,pos,fn,args;return (function(){pos=this._apply("anything");fn=this._apply("trans");args=this._many((function(){return this._apply("trans")}));return new lively.ast.Call(pos,fn,args)}).call(this)},
"new":function(){var $elf=this,pos,clsExpr;return (function(){pos=this._apply("anything");clsExpr=this._apply("trans");return new lively.ast.New(pos,clsExpr)}).call(this)},
"var":function(){var $elf=this,pos,name,val;return (function(){pos=this._apply("anything");name=this._apply("anything");val=this._apply("trans");return new lively.ast.VarDeclaration(pos,name,val)}).call(this)},
"throw":function(){var $elf=this,pos,expr;return (function(){pos=this._apply("anything");expr=this._apply("trans");return new lively.ast.Throw(pos,expr)}).call(this)},
"try":function(){var $elf=this,pos,trySeq,err,catchSeq,finallySeq;return (function(){pos=this._apply("anything");trySeq=this._apply("trans");err=this._apply("anything");catchSeq=this._apply("trans");finallySeq=this._apply("trans");return new lively.ast.TryCatchFinally(pos,trySeq,err,catchSeq,finallySeq)}).call(this)},
"func":function(){var $elf=this,pos,body,args;return (function(){pos=this._apply("anything");body=this._apply("trans");args=this._many((function(){return this._apply("trans")}));return new lively.ast.Function(pos,body,args)}).call(this)},
"json":function(){var $elf=this,pos,properties;return (function(){pos=this._apply("anything");properties=this._many((function(){return this._apply("trans")}));return new lively.ast.ObjectLiteral(pos,properties)}).call(this)},
"binding":function(){var $elf=this,pos,name,property;return (function(){pos=this._apply("anything");name=this._apply("anything");property=this._apply("trans");return new lively.ast.ObjProperty(pos,name,property)}).call(this)},
"switch":function(){var $elf=this,pos,expr,cases;return (function(){pos=this._apply("anything");expr=this._apply("trans");cases=this._many((function(){return this._apply("trans")}));return new lively.ast.Switch(pos,expr,cases)}).call(this)},
"case":function(){var $elf=this,pos,condExpr,thenExpr;return (function(){pos=this._apply("anything");condExpr=this._apply("trans");thenExpr=this._apply("trans");return new lively.ast.Case(pos,condExpr,thenExpr)}).call(this)},
"default":function(){var $elf=this,pos,defaultExpr;return (function(){pos=this._apply("anything");defaultExpr=this._apply("trans");return new lively.ast.Default(pos,defaultExpr)}).call(this)},
"regex":function(){var $elf=this,pos,exprString,flags;return (function(){pos=this._apply("anything");exprString=this._apply("anything");flags=this._apply("anything");return new lively.ast.Regex(pos,exprString,flags)}).call(this)}})
});