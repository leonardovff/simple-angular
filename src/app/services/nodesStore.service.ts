import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { forkJoin, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Store } from './store';
import { Node } from 'src/models/node.model';
import { State } from './state';

@Injectable({
  providedIn: 'root'
})
export class NodesStore extends Store<Node[]> {
  constructor(private api: ApiService) {
    super(new State().list);
  }

  public getStatusAndBlocks() {
    this._getStatus().subscribe((value: any) => {
      this.setState([...value]);
      this.getBlocks();
    });
  }

  public _getStatus() {
    const status = this.state.map(node => {
      return this.api.get(`${node.url}/api/v1/status`).pipe(
        catchError(error =>
          of({
            node_name: false
          })
        ),
        map(({ node_name }) => {
          return {
            ...node,
            name: node_name,
            online: !!node_name,
            loading: false
          };
        })
      );
    });
    return forkJoin(status);
  }
  getBlocks(){
    this._getBlocks().subscribe((value: any) => {
      this.setState([...value]);
    });
  }

  public _getBlocks() {
    const status = this.state.map(node => {
      return this.api.get(`${node.url}/api/v1/blocks`).pipe(
        catchError(error =>
          of({
            ...node,
            blocks: {
              data: [],
              loading: false
            }
          })
        ),
        map(({ data }) => {
          return {
            ...node,
            blocks: {
              data: data ? data : [],
              loading: false
            }
          };
        })
      );
    });
    return forkJoin(status);
  }
}
