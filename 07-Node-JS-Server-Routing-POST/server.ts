import http, {Server , IncomingMessage, ServerResponse} from 'http';

const hostname:string = '127.0.0.1';
const port:number =5000;

const server:Server = http.createServer((request:IncomingMessage , response : ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type' ,  'text/html' );

//URL & POST


// let url = request.url;
// let method = request.method;

if (request.url == '/user' && request.method === 'POST') {
    let body: any = '';

    request.on('data', (chunk) => {
            body += chunk;

        }).on('end', () => {

            let formData = JSON.parse(body);
            response.end(`<pre>${JSON.stringify(formData)}</pre>`);
        });
}




    // response.end(`<h3 style="font-family: Lato,sans-serif; color:gree"> Welcome to Node JS Server<h3/>`);

});
server.listen(port, hostname, () => {
    console.log(`Node JS Server is started at http://${hostname}:${port}`)
});
