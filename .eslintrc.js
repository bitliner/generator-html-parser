module.exports = {
    "extends": "google",
    "rules": {
        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": false,
                "MethodDefinition": false,
                "ClassDeclaration": true,
                "ArrowFunctionExpression": false
            }
        }]
    }
};
