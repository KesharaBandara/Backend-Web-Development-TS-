// import { error } from 'console';
import http, {Server , IncomingMessage, ServerResponse} from 'http';

const hostname:string = '127.0.0.1';
const port:number =5000;

const server:Server = http.createServer((request:IncomingMessage , response : ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type' ,  'text/html' );

//URL & POST


// let url = request.url;
// let method = request.method;

if (request.url == '/login' && request.method === 'POST') {
    try{
    let body: any = '';
    request.on('data', (chunk) => {
            body += chunk;

        }).on('end', () => {
             let formData = JSON.parse(body);
             if(formData.name === 'Rajan' && formData.password === 'rajan@123'){
            response.end(`<h3 style ="font-family: Lato,sans-serif; color:green">Login is Success</h3>`);
             }
             else{
                response.end(`<h3 style ="font-family: Lato,sans-serif; color:green">Unsuccessful Login</h3>`);
             }
        });
    }
    catch(error){
        console.error(error);
    }
}





    // response.end(`<h3 style="font-family: Lato,sans-serif; color:gree"> Welcome to Node JS Server<h3/>`);

});
server.listen(port, hostname, () => {
    console.log(`Node JS Server is started at http://${hostname}:${port}`)
});
