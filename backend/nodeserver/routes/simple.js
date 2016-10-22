module.exports = function(router) {

    /**
     * Defines an api route /<route>
     */
    var simpleRoute = router.route('/simple');

    /**
     * Restful API: HTTP Request handlers
     */
    simpleRoute
        .get(function(req, res) {
            
        })
        .post(function(req, res) { 

        })
        .put(function(req, res) { 

        })
        .delete(function(req, res) { 

        })
        .options(function(req, res) {
            res.writeHead(200);
            res.end();
        });
  return router;
}
