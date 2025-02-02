import { IResultSet, SwitchViewAction } from '@indice/ng-components';
import { Component, OnInit } from '@angular/core';
import { BaseListComponent, Icons, RouterViewAction, ViewAction, ListViewType } from '@indice/ng-components';
import { Observable, of } from 'rxjs';
import { SampleViewModel } from '../../../models/sample.vm';
import { delay } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

export const ShellLayoutsListSamples = [
  new SampleViewModel(
    'Custom Header shell',
    'Layout for all views in our application, contains a header component with placehodlers for actions and search',
    undefined, 'custom-header'),

  new SampleViewModel(
    'Fluid Shell layout ',
    'Layout for all model views in our application, contains a left pane navigation component with placehodlers for form components',
    undefined, 'fluid')
];

@Component({
  selector: 'lib-shell-samples-list',
  templateUrl: './shell-samples-list.component.html',
  styleUrls: ['./shell-samples-list.component.css']
})
export class ShellSamplesListComponent extends BaseListComponent<SampleViewModel> implements OnInit {
  newItemLink: string | null = null;
  public full = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    super(route, router);
    this.view = ListViewType.Tiles;
    this.pageSize = 10;
  }

  loadItems(): Observable<IResultSet<SampleViewModel> | null | undefined> {
    const items: SampleViewModel[] = [];
    for (let i = 0; i < this.pageSize; i++ ) {
      ShellLayoutsListSamples.forEach( vm => {
        items.push(vm);
      });
    }
    return of({count: 100, items }).pipe(delay(1200));
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.actions = [];
    this.actions.push(new SwitchViewAction(ListViewType.Tiles, Icons.TilesView, 'switch to tiles view'));
    this.actions.push(new SwitchViewAction(ListViewType.Table, Icons.TableView, 'switch to table (grid) view'));
    this.actions.push(new RouterViewAction(Icons.Information, 'samples/shell-layout/info', 'rightpane', 'Πληροφορίες'));
  }

}
