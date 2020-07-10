const reqtest = require( 'reqtest' );

module.exports = async (context,req) => {
  await reqtest.handle( context, req ); 
}
