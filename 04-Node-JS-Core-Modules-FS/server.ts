import http, {Server , IncomingMessage, ServerResponse} from 'http';
import fs from 'fs';
import path from 'path';
import { notStrictEqual } from 'assert';

const hostname:string = '127.0.0.1';
const port:number =5000;

const server:Server = http.createServer((request:IncomingMessage , response : ServerResponse) => {
    response.statusCode = 200;
    response.setHeader('Content-Type' ,  'text/html' );
    // response.end(`<h3 style="font-family: Lato,sans-serif; color:gree"> Welcome to Node JS Server<h3/>`);

    // fs module

    // fs.readFile(path.join(__dirname, 'server.ts'), 'utf-8', (error, result ) => {
    //     if(error){
    //         console.log(error);
    //     }
    //     fs.writeFile(path.join(__dirname, 'data', 'server.txt'), result, 'utf-8', (error) => {
    //         if(error){
    //             console.log(error);
    //         }
    //         response.end(`<pre>Data is written to a file..</pre>`);

    //     } )
    // });

    //for json responses

    fs.readFile(path.join(__dirname, 'data', 'users.json'), 'utf-8', (error, result) => {
        if(error){
            console.log(error);
        }
        response.end(`<pre>${result}</pre>`);

    } )

 

    });
server.listen(port, hostname, () => {
    console.log(`Node JS Server is started at http://${hostname}:${port}`)
});