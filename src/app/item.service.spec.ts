import {TestBed} from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';


import {ItemService} from './item.service';
import any = jasmine.any;
import {Item} from './items/item';
import {HttpClient} from '@angular/common/http';

describe('ItemService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ItemService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getItems', () => {
    let expectedItems: Item[];

    beforeEach(() => {
      // Dummy data to be returned by request.
      expectedItems = [
        {id: '101', name: 'beer', description: 'delicious beer', price: 30, amountOfStock: 20, stockUrgency: 'High'},
        {id: '102', name: 'wine', description: 'delicious wine', price: 20, amountOfStock: 20, stockUrgency: 'High'},
      ] as Item[];
    });

    it('should return expected employees by calling once', () => {
      service.getItems().subscribe(
        items => expect(items).toEqual(expectedItems, 'should return expected employees'),
        fail
      );

      const req = httpTestingController.expectOne(service.itemsUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedItems); // Return expectedItems
    });
  });
})
