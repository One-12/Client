import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';

@Component({
  selector: 'one12-post-template-list',
  templateUrl: './post-template-list.component.html',
  styleUrls: ['./post-template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostTemplateListComponent implements OnInit {
  public selectedMasonryItem: { id: number; url: string };

  public masonryItems: { id: number; url: string }[];

  public templateSelected: EventEmitter<string> = new EventEmitter();

  constructor(private readonly _router: Router, private readonly _activatedRoute: ActivatedRoute) {
    this.selectedMasonryItem = null;
  }

  ngOnInit(): void {
    this.masonryItems = [
      { id: 1, url: 'https://i.pinimg.com/736x/99/16/24/991624828ac61c8d9bf359e0474c339a.jpg' },
      { id: 3, url: 'https://www.memesmonkey.com/images/memesmonkey/68/683329711b120b8dc8a5ed0c20bd07b9.jpeg' },
      { id: 4, url: 'https://ahseeit.com/tamil/king-include/uploads/2018/12/fb_img_1545664232861-8245413433.jpg' },
      { id: 5, url: 'https://i.pinimg.com/236x/da/7a/61/da7a617e93ee503d2520d89261af8bdc.jpg' },
      { id: 6, url: 'https://i.pinimg.com/originals/54/cc/6e/54cc6eeb70e87a3a51a204f76a900315.jpg' },
      { id: 7, url: 'https://qph.fs.quoracdn.net/main-qimg-bdd706dda3f10c5e98b14ef9e6582f69.webp' },
      { id: 8, url: 'https://pbs.twimg.com/media/Dta-FEmVYAAr5MQ.jpg' },
      { id: 9, url: 'https://ahseeit.com/tamil/king-include/uploads/2018/12/fb_img_1545664232861-8245413433.jpg' },
      { id: 10, url: 'https://i.pinimg.com/236x/da/7a/61/da7a617e93ee503d2520d89261af8bdc.jpg' },
      { id: 11, url: 'https://i.pinimg.com/originals/54/cc/6e/54cc6eeb70e87a3a51a204f76a900315.jpg' },
      { id: 12, url: 'https://qph.fs.quoracdn.net/main-qimg-bdd706dda3f10c5e98b14ef9e6582f69.webp' },
      { id: 13, url: 'https://pbs.twimg.com/media/Dta-FEmVYAAr5MQ.jpg' },
    ];
  }

  public async onMemeTemplateSelected(selectedTemplatedId: string): Promise<void> {
    await this._router.navigate([], {
      relativeTo: this._activatedRoute,
      queryParams: { selectedTemplate: selectedTemplatedId },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
