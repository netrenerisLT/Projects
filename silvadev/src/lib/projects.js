export async function getProjects() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    // throw new Error('Loading meals failed');
    return db.prepare('SELECT * FROM meals').all();
  }