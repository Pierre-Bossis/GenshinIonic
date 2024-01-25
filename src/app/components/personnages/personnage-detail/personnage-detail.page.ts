import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, SegmentCustomEvent } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Aptitudes } from 'src/app/_models/aptitudes';
import { Armes } from 'src/app/_models/arme';
import { Constellations } from 'src/app/_models/constellations';
import { LivresAptitude } from 'src/app/_models/livres-aptitude';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';
import { Personnages } from 'src/app/_models/personnages';
import { Produits } from 'src/app/_models/produits';
import { ConnectedUser } from 'src/app/_models/user';
import { ArmesService } from 'src/app/_services/armes.service';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { PersonnagesService } from 'src/app/_services/personnages.service';
import { ProduitsService } from 'src/app/_services/produits.service';
import { ModalBasicComponent } from 'src/app/shared/modals/modal-basic/modal-basic.component';
import { ModalConstellationsAptitudesComponent } from 'src/app/shared/modals/modal-constellations-aptitudes/modal-constellations-aptitudes.component';

@Component({
  selector: 'app-personnage-detail',
  templateUrl: './personnage-detail.page.html',
  styleUrls: ['./personnage-detail.page.scss'],
})
export class PersonnageDetailPage implements OnInit, OnDestroy {
  connectedUser!:ConnectedUser | undefined
connectedUserSubscription!:Subscription

  constructor(private authService:AuthService,private personnagesService:PersonnagesService,private activatedRoute:ActivatedRoute,private produitsService:ProduitsService,
    private armesService:ArmesService,private materiauxAmeliorationPersonnagesService:MateriauxAmeliorationPersonnagesService,
    private router:Router,private modalCtrl:ModalController) { }
personnage!:Personnages
spinner: boolean = true
personnageName: string | null = null
selectedSegment: string = 'detail';
trailer!: SafeResourceUrl;

  //many to one
  arme?: Armes
  produit!: Produits
  mat!: MateriauxAmeliorationPersonnages
  constellations: Constellations[] = []
  aptitudes: Aptitudes[] = []
  formDisplay:boolean = false

  //many to many
  livresAptitude: LivresAptitude[] = []
  materiauxElevation: MateriauxElevationPersonnages[] = []
  materiauxAmelioPersosArmes: MateriauxAmeliorationPersonnagesEtArmes[] = []

  ngOnInit(): void {
    this.connectedUserSubscription = this.authService.connectedUserSubject.subscribe((connectedUser) => {
      this.connectedUser = connectedUser;
      console.log(this.connectedUser);
      
    })

    this.activatedRoute.params.subscribe(params => {
      this.personnageName = params['nom'];
      if(this.personnageName != null)
        this.loadingData(this.personnageName)      
    });

    if (this.personnageName != null) {
      this.personnagesService.getByName(this.personnageName).subscribe((data) => {
        this.personnage = data.personnage,
          this.livresAptitude = data.livres,
          this.materiauxElevation = data.matsElevation
        this.materiauxAmelioPersosArmes = data.matsAmelioPersosArmes

        if (data.personnage.arme_Id) {
          this.armesService.getById(data.personnage.arme_Id).subscribe((dataArme) => this.arme = dataArme.arme)
        }

        this.produitsService.getById(data.personnage.produit_Id).subscribe((dataProduit) => this.produit = dataProduit)
        this.materiauxAmeliorationPersonnagesService.getById(data.personnage.materiauxAmeliorationPersonnage_Id).subscribe((dataMat) => this.mat = dataMat)

        //this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.personnage.trailerYT);

         this.refreshConstellationsList()
         this.refreshAptitudesList()
      })
    }
  }

  segmentChanged(e:SegmentCustomEvent){
    if(e.detail.value != undefined){
        this.selectedSegment = e.detail.value.toString()
    }
  }

  onDetailWeapon(nom:string){
    this.router.navigateByUrl('armes/detail/'+nom)
  }

  openModal(materiau: any) {
    this.modalCtrl.create({
      component: ModalBasicComponent,
      componentProps: { materiau : materiau }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  openModalConstellationsAptitudes(item: any) {
    this.modalCtrl.create({
      component: ModalConstellationsAptitudesComponent,
      componentProps: { item : item }
    }).then(modalEl => {
      modalEl.present()
    })
  }

  private loadingData(nom:string) {
    this.personnagesService.getByName(nom).subscribe((data) => {
      this.personnage = data.personnage
      this.spinner = false      
    });
  }

  refreshAptitudesList() {
    this.personnagesService.getAllAptitudes(this.personnage.id).subscribe((data) => this.aptitudes = data)
    this.formDisplay = false
  }

  refreshConstellationsList() {
    this.personnagesService.getAllConstellations(this.personnage.id).subscribe((data) => this.constellations = data)
    this.formDisplay = false
  }

  ngOnDestroy() {
    if (this.connectedUserSubscription) {
      this.connectedUserSubscription.unsubscribe();
    }
  }
}
