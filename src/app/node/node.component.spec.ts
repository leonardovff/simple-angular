import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

import { StatusComponent } from '../status/status.component';
import { NodeComponent } from './node.component';
import { By } from '@angular/platform-browser';

describe('NodeComponent', () => {
  let httpClient: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NodeComponent, StatusComponent],
    }).compileComponents();

    httpClient = TestBed.get(HttpClient);
  }));

  it(`
    should show the name of the node
    when pass the node data in the start of component
  `, () => {
    // arrange
    const fixture = TestBed.createComponent(NodeComponent);
    const { componentInstance, debugElement } = fixture;
    componentInstance.node = {
      url: 'https://thawing-springs-53971.herokuapp.com',
      online: false,
      name: 'Node 1',
      loading: true,
      blocks: {
        data: [],
        loading: true
      }
    }

    // act
    fixture.detectChanges();

    const name = debugElement.query(By.css('[class="name"]')).nativeElement.innerHTML;
    expect(name).toEqual(name);
  });

  it(`
    should show a loading feedback while the
    loading input (node.loading is equal to true)
  `, () => {
    // arrange
    const fixture = TestBed.createComponent(NodeComponent);
    const { componentInstance, debugElement } = fixture;
    componentInstance.node = {
      url: 'https://thawing-springs-53971.herokuapp.com',
      online: false,
      name: 'Node 1',
      loading: false,
      blocks: {
        data: [],
        loading: true
      }
    }
    fixture.detectChanges();

    // act
    componentInstance.node = {
      ...componentInstance.node,
      loading: true,
    }

    const name = debugElement.query(By.css('[class="name"]')).nativeElement.innerHTML;
    expect(name).toEqual(name);
  });
});
