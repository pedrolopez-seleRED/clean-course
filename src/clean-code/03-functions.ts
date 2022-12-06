(() => {

    function getMovieById( id: string ) {
        console.log({ movieId });
    }


    function getCastById( id: string ) {
        console.log({ id });
    }

 
    function getActorBioById ( id: string ) {
        console.log({ ActorId });
    }
    
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie({title,description,rating,cast}: Movie ) {
        console.log({ title, description, rating, cast });
    }

   
function checkFullName( fullname:string){
    console.log({ fullName})
    return true;
}


    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    //Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

       if ( isDead ) return 1500;
           
       if ( isSeparated ) return 2500;

       return ( isRetired ) ? 3000 : 4000;

        
    }


})();
