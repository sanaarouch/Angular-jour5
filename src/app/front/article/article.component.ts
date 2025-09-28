import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ProductService, Product } from "../../service/article-fictif.service";

@Component({
  selector: 'app-product',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ProductComponent implements OnInit {
  product: Product | null = null;
  quantity: number = 1;
  Math = Math;
  selectedSize: string = '';
  selectedColor: string = '';
  activeTab: string = 'description';
  
  constructor(
    private router : ActivatedRoute,
    private service : ProductService)
    {}

  ngOnInit(): void {
   
    this.router.paramMap.subscribe((params) =>{
      console.log(params)
      const id = params.get("id");
      console.log(id)
      this.service.getProductById(id!)
      .subscribe( (response : Product) => {
      this.product = response
      console.log(this.product);
      
      // Initialiser les options par défaut
      if (this.isClothing(response)) {
        this.selectedSize = this.getAvailableSizes(response)[1] || 'M';
        this.selectedColor = this.getAvailableColors(response)[0]?.name || 'Noir';
      }
    })
 
  })
}

  addToCart() {
    console.log(`Ajout au panier: ${this.quantity} x ${this.product?.title}`);
    this.showSuccessMessage(`${this.product?.title} ajouté au panier !`);
  }

  addToWishlist() {
    console.log(`Ajout aux favoris: ${this.product?.title}`);
    this.showSuccessMessage(`${this.product?.title} ajouté aux favoris !`);
  }

  buyNow() {
    console.log(`Achat immédiat: ${this.quantity} x ${this.product?.title}`);
    // Redirection vers checkout
  }

  // Méthodes pour humaniser le contenu
  getExpertReview(product: Product): string {
    const reviews = [
      "Un produit que j'utilise personnellement depuis 6 mois. Qualité au rendez-vous !",
      "Après 3 semaines de tests intensifs, je le recommande sans hésitation.",
      "Excellent rapport qualité-prix. Mes clients sont ravis de ce choix.",
      "Un incontournable dans sa catégorie. Performance et fiabilité garanties.",
      "Testé dans toutes les conditions, il dépasse mes attentes."
    ];
    return reviews[product.id % reviews.length];
  }

  getAvailabilityText(product: Product): string {
    const stock = product.rating.count;
    if (stock > 100) return 'En stock • Expédition immédiate';
    if (stock > 50) return 'Stock limité • Dernières pièces';
    return 'Sur commande • Délai 3-5 jours';
  }

  getProductSubtitle(product: Product): string {
    const subtitles = {
      'electronics': 'Technologie de pointe pour les passionnés',
      'jewelery': 'Élégance et raffinement à porter au quotidien',
      "men's clothing": 'Style moderne pour l\'homme d\'aujourd\'hui',
      "women's clothing": 'Mode féminine tendance et confortable'
    };
    return subtitles[product.category as keyof typeof subtitles] || 'Qualité premium garantie';
  }

  getRatingBreakdown(product: Product): string {
    return `${Math.floor(product.rating.rate * 20)}% des clients recommandent ce produit`;
  }

  getDiscountPercentage(product: Product): number {
    return Math.floor(((product.price * 1.3) - product.price) / (product.price * 1.3) * 100);
  }

  getDeliveryDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  }

  getWarrantyPeriod(product: Product): string {
    return product.category === 'electronics' ? '2 ans' : '1 an';
  }

  isClothing(product: Product): boolean {
    return product.category.includes('clothing');
  }

  getAvailableSizes(product: Product): string[] {
    return ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  }

  getAvailableColors(product: Product): {name: string, hex: string}[] {
    return [
      { name: 'Noir', hex: '#000000' },
      { name: 'Blanc', hex: '#FFFFFF' },
      { name: 'Bleu Marine', hex: '#1e3a8a' },
      { name: 'Rouge', hex: '#dc2626' },
      { name: 'Vert', hex: '#059669' }
    ];
  }

  selectSize(size: string): void {
    this.selectedSize = size;
  }

  selectColor(color: string): void {
    this.selectedColor = color;
  }

  getProductHighlights(product: Product): any[] {
    const highlights = [
      {
        icon: 'fas fa-award',
        title: 'Qualité Premium',
        description: 'Matériaux haut de gamme sélectionnés'
      },
      {
        icon: 'fas fa-shipping-fast',
        title: 'Livraison Express',
        description: 'Expédition sous 24h ouvrées'
      },
      {
        icon: 'fas fa-user-check',
        title: 'Testé par nos experts',
        description: 'Validation qualité par notre équipe'
      },
      {
        icon: 'fas fa-medal',
        title: 'Satisfaction garantie',
        description: '98% de clients satisfaits'
      }
    ];
    
    return highlights.slice(0, 3); // Retourner 3 highlights
  }

  getAdditionalDescription(product: Product): string {
    return `Ce ${product.category === 'electronics' ? 'produit technologique' : 'article'} a été soigneusement sélectionné par notre équipe d'experts. Nous garantissons sa qualité et sa conformité aux standards les plus élevés du marché.`;
  }

  getTechSpecs(product: Product): {name: string, value: string}[] {
    if (product.category !== 'electronics') return [];
    
    return [
      { name: 'Processeur', value: 'Dernière génération' },
      { name: 'Mémoire', value: '8GB RAM' },
      { name: 'Stockage', value: '256GB SSD' },
      { name: 'Connectivité', value: 'WiFi 6, Bluetooth 5.0' },
      { name: 'Garantie', value: '2 ans constructeur' }
    ];
  }

  getBrandName(product: Product): string {
    const brands = {
      'electronics': ['Apple', 'Samsung', 'Sony', 'LG'],
      'jewelery': ['Pandora', 'Swarovski', 'Cartier'],
      "men's clothing": ['Nike', 'Adidas', 'Zara'],
      "women's clothing": ['Zara', 'Mango', 'H&M']
    };
    
    const categoryBrands = brands[product.category as keyof typeof brands] || ['Premium'];
    return categoryBrands[product.id % categoryBrands.length];
  }

  getModelName(product: Product): string {
    return `Modèle ${new Date().getFullYear()} - Série ${product.id}`;
  }

  getDetailedSpecs(product: Product): {name: string, value: string}[] {
    const specs = [
      { name: 'Dimensions', value: '15.2 x 7.8 x 0.8 cm' },
      { name: 'Poids', value: '245g' },
      { name: 'Matériaux', value: 'Aluminium premium, Verre trempé' },
      { name: 'Certification', value: 'CE, FCC, RoHS' },
      { name: 'Origine', value: 'Conçu en Californie' }
    ];
    
    return specs;
  }

  getDetailedFeatures(product: Product): any[] {
    return [
      {
        icon: 'fas fa-microchip',
        title: 'Performance exceptionnelle',
        description: 'Processeur dernière génération pour une fluidité parfaite dans toutes vos tâches quotidiennes.'
      },
      {
        icon: 'fas fa-battery-full',
        title: 'Autonomie longue durée',
        description: 'Jusqu\'à 24h d\'utilisation intensive grâce à notre technologie de batterie optimisée.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Résistance renforcée',
        description: 'Conception robuste testée dans nos laboratoires pour résister aux chocs et à l\'usure.'
      }
    ];
  }

  getSummaryPoints(product: Product): string[] {
    return [
      'Testé et approuvé par nos experts',
      'Garantie constructeur officielle',
      'Support technique gratuit à vie',
      'Livraison express disponible',
      'Retour gratuit sous 45 jours'
    ];
  }

  getExpertName(product: Product): string {
    const experts = ['Marc Dubois', 'Julie Martin', 'Thomas Leroy', 'Emma Rousseau'];
    return experts[product.id % experts.length];
  }

  getExpertTitle(product: Product): string {
    const titles = {
      'electronics': 'Expert Tech & Innovation',
      'jewelery': 'Spécialiste Bijoux & Accessoires',
      "men's clothing": 'Consultant Mode Masculine',
      "women's clothing": 'Experte Tendances Féminines'
    };
    return titles[product.category as keyof typeof titles] || 'Expert Produit';
  }

  getExpertImage(product: Product): string {
    const images = [
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    ];
    return images[product.id % images.length];
  }

  getExpertExperience(product: Product): string {
    const experiences = ['8 ans', '12 ans', '6 ans', '10 ans'];
    return experiences[product.id % experiences.length];
  }

  getExpertSpecialty(product: Product): string {
    const specialties = {
      'electronics': 'Gaming & Mobilité',
      'jewelery': 'Horlogerie & Bijouterie',
      "men's clothing": 'Streetwear & Business',
      "women's clothing": 'Prêt-à-porter & Luxe'
    };
    return specialties[product.category as keyof typeof specialties] || 'Produits Premium';
  }

  getExpertScore(product: Product): number {
    return Math.floor(product.rating.rate * 2);
  }

  getExpertCriteria(product: Product): any[] {
    return [
      { name: 'Qualité', score: Math.floor(product.rating.rate * 2) },
      { name: 'Design', score: Math.floor(product.rating.rate * 1.8) },
      { name: 'Rapport qualité/prix', score: Math.floor(product.rating.rate * 1.9) },
      { name: 'Durabilité', score: Math.floor(product.rating.rate * 1.7) }
    ];
  }

  getExpertDetailedReview(product: Product): string {
    return `Après plusieurs semaines d'utilisation intensive, ce produit s'impose comme une référence dans sa catégorie. La qualité de fabrication est remarquable, et les performances dépassent les attentes. Je le recommande particulièrement pour ${this.getTargetAudience(product)}.`;
  }

  getTargetAudience(product: Product): string {
    const audiences = {
      'electronics': 'les professionnels et les passionnés de technologie',
      'jewelery': 'les amateurs de belles pièces et de raffinement',
      "men's clothing": 'les hommes soucieux de leur style',
      "women's clothing": 'les femmes modernes et élégantes'
    };
    return audiences[product.category as keyof typeof audiences] || 'tous les utilisateurs exigeants';
  }

  getProductPros(product: Product): string[] {
    const pros = [
      'Qualité de fabrication exceptionnelle',
      'Design soigné et moderne',
      'Excellent rapport qualité-prix',
      'Performance au-dessus de la moyenne',
      'Service après-vente réactif'
    ];
    return pros.slice(0, 3);
  }

  getProductCons(product: Product): string[] {
    const cons = [
      'Prix légèrement élevé pour certains budgets',
      'Notice d\'utilisation perfectible',
      'Délai de livraison parfois long en période de forte demande'
    ];
    return cons.slice(0, 2);
  }

  getExpertConclusion(product: Product): string {
    return `Un choix sûr que je recommande à ${Math.floor(product.rating.rate * 20)}% pour sa fiabilité et ses performances. Idéal pour ${this.getTargetAudience(product)}.`;
  }

  getExpertRecommendation(product: Product): string {
    return `Testé pendant ${Math.floor(Math.random() * 4 + 2)} semaines par notre équipe. Approuvé pour sa qualité et sa fiabilité.`;
  }

  getRatingDistribution(): any[] {
    return [
      { stars: 5, percentage: 68, count: 847 },
      { stars: 4, percentage: 22, count: 274 },
      { stars: 3, percentage: 7, count: 87 },
      { stars: 2, percentage: 2, count: 25 },
      { stars: 1, percentage: 1, count: 12 }
    ];
  }

  getDetailedReviews(product: Product): any[] {
    return [
      {
        name: 'Marie Dubois',
        avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
        rating: 5,
        title: 'Parfait pour mon usage quotidien',
        content: 'Acheté il y a 3 mois, je suis ravie de cet achat. La qualité est au rendez-vous et le service client de TechStore est exceptionnel. Livraison rapide et emballage soigné.',
        date: 'Il y a 2 jours',
        verified: true,
        helpful: 12,
        photos: []
      },
      {
        name: 'David Martin',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        rating: 5,
        title: 'Excellent rapport qualité-prix',
        content: 'Très satisfait de mon achat. Le produit correspond exactement à la description. Marc de l\'équipe TechStore m\'a très bien conseillé au téléphone.',
        date: 'Il y a 5 jours',
        verified: true,
        helpful: 8,
        photos: []
      },
      {
        name: 'Sophie L.',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        rating: 4,
        title: 'Très bon produit',
        content: 'Conforme à mes attentes. Petit bémol sur le délai de livraison mais le produit en vaut la peine. Je recommande.',
        date: 'Il y a 1 semaine',
        verified: true,
        helpful: 5,
        photos: []
      }
    ];
  }

  private showSuccessMessage(message: string): void {
    // Simulation d'une notification toast
    const toast = document.createElement('div');
    toast.className = 'success-toast';
    toast.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    `;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--success-500);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 0.75rem;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
      animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
      toast.style.animation = 'slideOutRight 0.3s ease-in';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }
}