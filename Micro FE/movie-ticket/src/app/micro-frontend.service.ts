import { loadRemoteModule } from '@angular-architects/native-federation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroFrontendService {

  constructor() { }

  async loadRemoteComponent(port: number, remoteName: string) {
    try {
      return await loadRemoteModule({
        exposedModule: './Component',
        remoteName: remoteName,
        remoteEntry: `http://localhost:${port}/remoteEntry.json`,
        fallback: 'unauthorized'
      })
    } catch (err) {
      console.error(`Error loading ${remoteName} component: `, err);
      throw err;
    }
  }

}
