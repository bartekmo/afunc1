exports=module.exports;

exports.handle = async (context,req) => {
  const responseMessage = "hi there!"

  context.res = {
    body: responseMessage;
  }
}
