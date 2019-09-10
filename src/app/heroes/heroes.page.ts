import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.page.html",
  styleUrls: ["./heroes.page.scss"]
})
export class HeroesPage implements OnInit {
  heroes: any;
  constructor() {}

  ngOnInit() {
    this.heroes = {
      squadName: "Super hero squad",
      homeTown: "Metro City",
      formed: 2016,
      secretBase: "Super tower",
      active: true,
      members: [
        {
          name: "Molecule Man",
          age: 29,
          secretIdentity: "Dan Jukes",
          powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
          name: "Madame Uppercut",
          age: 39,
          secretIdentity: "Jane Wilson",
          powers: [
            "Million tonne punch",
            "Damage resistance",
            "Superhuman reflexes"
          ]
        },
        {
          name: "Eternal Flame",
          age: 32,
          secretIdentity: "Unknown",
          powers: [
            "Immortality",
            "Heat Immunity",
            "Inferno",
            "Teleportation",
            "Interdimensional travel"
          ]
        },
        {
          name: "Molecule Man",
          age: 28,
          secretIdentity: "Dan Jukes",
          powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
          name: "Molecule Man",
          age: 34,
          secretIdentity: "Dan Jukes",
          powers: ["Radiation resistance", "Turning tiny", "Radiation blast"]
        },
        {
          name: "Molecule Man",
          age: 45,
          secretIdentity: "Dan Jukes",
          powers: ["Radiation resistance", "Turning tiny"]
        }
      ]
    };
  }

  filterAge(heroes: any) {
    return heroes.filter((item:any) => item.age >= 30);
  }
    

}
