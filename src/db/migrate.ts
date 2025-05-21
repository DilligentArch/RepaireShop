import { migrate } from 'drizzle-orm/neon-http/migrator';
import {db} from './index';


const main= async () => {
    try{
        await migrate(db,{
            migrationsFolder: 'src/db/migrations',

        })
        console.log('Migrations completed successfully');
    }catch (error) {
        console.error('Error occurred during migrations:', error);
        process.exit(1);
    }
}
main()