import http from 'http';



export class ApiRouter{
    public static mapRoutes(request:http.IncomingMessage , response:http.ServerResponse){

        let url: string | undefined = request.url;
    let method:string | undefined = request.method;
    let result: string = '';

    if(url === '/' && method === 'GET'){
        result = `<h3 style="font-family: Lato,sans-serif; color:gree"> Welcome to Node JS Server<h3/>`
    }

    else if (url ==='/about' && method === 'GET'){
        result = `<h3 style="font-family: Lato,sans-serif; color:gree"> About page<h3/>`
    }

    else if (url ==='/Service' && method === 'GET'){
        result = `<h3 style="font-family: Lato,sans-serif; color:gree"> Service page<h3/>`
    }

    else if (url ==='/Courses' && method === 'GET'){
        result = `<h3 style="font-family: Lato,sans-serif; color:gree"> Courses page<h3/>`
    }

    else if (url ==='/Contact' && method === 'GET'){
        result = `<h3 style="font-family: Lato,sans-serif; color:gree"> Contact page<h3/>`
    }
    else{
        `<h3 style="font-family: Lato,sans-serif; color:gree"> Not found<h3/>`
    }




    response.end(`${result}`);
    }
}