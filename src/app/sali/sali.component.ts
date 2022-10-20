import { Component, OnInit } from '@angular/core';
import { TemplateBindingParseResult } from '@angular/compiler';
// @ts-ignore
import {Club} from "interface_club.ts"
// @ts-ignore
import {Member} from "interface_member.ts"
// @ts-ignore
import {Object} from "interface_object.ts"
import club from "./club.json";
import member from "./member.json";
import object from "./object.json";

@Component({
  selector: 'app-sali',
  templateUrl: './sali.component.html',
  styleUrls: ['./sali.component.css']
})




export class SaliComponent implements OnInit {

   clubs:Club[]=club;
   members:Member[]=member;
   objects:Object[]=object;


  constructor() {
  

  for(let x=0; x<this.members.length;x++) {
   
    for(let y=0; y<this.objects.length;y++)  {
      if(this.members[x].id==this.objects[y].member_id){
            this.members[x].objects[0]=(this.objects[y])
      }
    }
  }

  

  for(let x=0; x<this.clubs.length;x++) {
   
    for(let y=0; y<this.members.length;y++)  {
      if(this.clubs[x].id==this.members[y].club_id){
            this.clubs[x].members[0]=(this.members[y])
      }
    }
  }



  }
   

  ngOnInit(): void {
  }


}
