<script setup>

const props = defineProps({
    travel: {
        required: true
    },
    
});



</script>

<template>


    <main class="container">



        <!-- @php
            $breadcrumReplaceLink = ['/sejour' => '/sejours'];
            $breadcrumReplaceName = ['/sejour' => 'Sejours', "/sejour/$sejour->idsejour" => $sejour->titresejour];
        @endphp
        @include('layout.breadcrumb')

        @isset($editing)
            <div class="alert alert-warning">
                <i data-lucide="pencil-ruler"></i>
                <span class="text">Vous êtes en train de modifier ce séjour.</span>
                <a class="button" href="{{ route('sejour', ['idsejour' => $sejour->idsejour]) }}">Quitter le mode d'édition</a>
            </div>
        @endisset

        @if (!$sejour->publie)
            <form class="alert alert-warning" action="{{ route('api.sejour-publish', ['idsejour' => $sejour->idsejour]) }}" method="POST">
                @csrf
                <i data-lucide="lock"></i>
                <span class="text">Le séjour n'est pas encore publié.</span>
                <button class="button" type="submit">Publier le séjour</button>
            </form>
        @endif

        @error('avis')
            <div class="alert alert-danger">
                <i data-lucide="ban"></i>
                <span class="text">{{ $message }}</span>
            </div>
        @enderror

        <section id="sejour">
            <div id="photo">
                <img src="/storage/sejour/{{ $sejour->photosejour }}" />
                @foreach ($sejour?->photos as $photo)
                    @isset($editing)
                        <div class="photo">
                            <img src="/storage/sejour/{{ $photo->photo }}" />
                            <form action="{{ route('api.sejour-photo.remove', ['idsejour' => $sejour->idsejour, 'idphoto' => $photo->idphoto]) }}" method="post">
                                @csrf
                                <button type="submit" class="button button-sm">
                                    <i data-lucide="trash-2"></i>
                                </button>
                            </form>
                        </div>
                    @else
                        <img src="/storage/sejour/{{ $photo->photo }}" />
                    @endisset
                @endforeach
                @isset($editing)
                    <form action="{{ route('api.sejour-photo.add', ['idsejour' => $sejour->idsejour]) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="input-control input-control-image">
                            <div class="image">
                                <img src="">
                                <div class="hover"></div>
                            </div>
                            <div class="input-container">
                                <input id="photo-upload" type="file" name="photo-upload" value="{{ old('photo-upload') }}"
                                    accept="image/png, image/jpeg" autocomplete="off" />
                                <button class="button" disabled type="button" id="photo-upload-remove"><i
                                        data-lucide="image-off"></i></button>
                            </div>
                            @error('photo-upload')
                                <p class="alert alert-error">{{ $message }}</p>
                            @enderror
                        </div>
                        <button class="button" type="submit">Ajouter la photo</button>
                    </form>
                @endisset
            </div>
            @isset($editing)
                <form id="description" action="{{ route('api.sejour-update', ['idsejour' => $sejour->idsejour]) }}" method="POST">
                    @csrf
                    <input name="titre" class="title input-control-inline" placeholder="Titre"
                        value="{{ $sejour->titresejour }}" />
                    <hr>
                    <h4 class="prix">À partir de <span class="euros"><input name="prix" class="input-control-inline"
                                type="number" placeholder="Prix" value="{{ $sejour->prixsejour }}" /> € /
                            personne</span></h4>
                    <div class="input-control input-control-text input-control-full">
                        <textarea name="description" class="description"
                            placeholder="Description du séjour...">{{ $sejour->descriptionsejour }}</textarea>
                    </div>
            @else
                <div id="description">
                    <h1 class="title">{{ $sejour->titresejour }}</h1>
                    <hr>
                    @if (isset($sejour->nouveauprixsejour))
                        <h4 class="prix" style="text-decoration-line: line-through;">À partir de <span
                                class="euros">{{ $sejour->prixsejour }}€ /
                                personne</span>
                            <div data-help="Le prix est TTC"></div>
                        </h4>

                        <h4 class="prix" style="color: red; text-decoration-line:underline;">À partir de
                            {{ $sejour->nouveauprixsejour }}€ / personne</br>
                            Profitez de
                            {{ round((1 - ($sejour->nouveauprixsejour ?? $sejour->prixsejour) / $sejour->prixsejour) * 100, 1) }}%
                            de réduction !
                        </h4>
                    @else
                        <h4 class="prix">À partir de <span class="euros">{{ $sejour->prixsejour }}€ / personne</span>
                            <div data-help="Le prix est TTC"></div>
                        </h4>
                    @endif
                    <p class="description">{{ $sejour->descriptionsejour }}</p>
            @endisset
                    <div id="categories">
                        <p>{{ $sejour->categorievignoble->libellecategorievignoble }}</p>
                        <p>{{ $sejour->duree->libelleduree }}</p>
                        <p>{{ $sejour->categoriesejour->libellecategoriesejour }}</p>
                        <p>{{ $sejour->theme->libelletheme }}</p>
                    </div>
                    <div class="buttons buttons-advanced">
                        @if ($sejour->publie)
                            <a class="button" href="{{ route('personnaliser', ['idsejour' => $sejour->idsejour]) }}">
                                <i data-lucide="shopping-basket"></i>
                                <span class="text">Personnaliser ou offrir</span>
                            </a>

                            @if (Auth::check())
                                <button class="button" type="button" id="ecrire-avis">
                                    <i data-lucide="message-square-quote"></i>
                                    <span class="text">Écrire un avis</span>
                                </button>
                            @endif

                            @if (Auth::check())
                                @if (Auth::user()->favoris->contains($sejour))
                                    <form method="post" action="{{ route('api.favoris.remove', ['idsejour' => $sejour->idsejour]) }}">
                                        @csrf
                                        <button class="button" type="submit">
                                            <i data-lucide="heart-off"></i>
                                            <span class="text">Retirer des favoris</span>
                                        </button>
                                    </form>
                                @else
                                    <form method="post" action="{{ route('api.favoris.add', ['idsejour' => $sejour->idsejour]) }}">
                                        @csrf
                                        <input type="hidden" name="idsejour" value="{{ $sejour->idsejour }}">
                                        <button class="button" type="submit">
                                            <i data-lucide="heart"></i>
                                            <span class="text">Ajouter aux favoris</span>
                                        </button>
                                    </form>
                                @endif
                            @endif
                        @endif

                        @if (Helpers::AuthIsRole(Role::ServiceVente) || Helpers::AuthIsRole(Role::Dirigeant))
                            @isset($editing)
                                <button class="button" type="submit">
                                    <i data-lucide="save"></i>
                                    <span class="text">Sauvegarder</span>
                                </button>
                            @else
                                <a class="button" href="{{ route('sejour.edit', ['idsejour' => $sejour->idsejour]) }}">
                                    <i data-lucide="pencil-ruler"></i>
                                    <span class="text">Modifier séjour</span>
                                </a>
                            @endisset
                            <button class="reduction button" type="button" data-idsejour="{{ $sejour->idsejour }}">
                                <i data-lucide="badge-percent"></i>
                                <span class="text">Promotion</span>
                            </button>
                        @endif
                    </div>
                    @isset($editing)
                        </form>
                    @else
            </div>
            @endif
        </section> -->

 

        <!-- <hr> -->

        <h2 class="titreg">Le programme détaillé de votre séjour</h2>

        <section id="etapes" v-for="etape in travel.etapes">
                    <article class="etape">
                        <h2>Étape  : {{ etape.titreetape}}</h2>
                        <p>{{ etape.descriptionetape }}</p>
                        <img :src="'/src/assets/images/etape/'+etape.photoetape">
                    </article>

        </section>

        <hr>
        <h2 class="titreg">Les hébergements proposés</h2>

        <section id="hebergements" v-for="etape in travel.etapes">

            <article class="hebergement">
                <img :src="'/src/assets/images/hebergement/'+etape.idhebergementNavigation.photohebergement">
                <p class="descrheberg">{{ etape.idhebergementNavigation.descriptionhebergement }}</p>

                <article id="hotel">


                    <a class="lienheberg link" href="{{ etape.idhebergementNavigation.lienhebergement }}"
                        target="_blank">"{{ etape.idhebergementNavigation.idpartenaireNavigation.nompartenaire }}"</a>

<!-- ------------------Faire le post -->

                    <!-- @isset($editing) -->
                        <!-- <form action="{{ route('api.sejour-hebergement-edit', ['idsejour' => $travel->idsejour, 'idetape' => etape.idetape]) }}" method="POST">
                            @csrf
                            <input type="hidden" name="idhebergement" value="{{ etape.idhebergementNavigation.idhebergement }}">
                            <button class="button" type="submit">
                                @if (hebergement.disponibilitehebergement == true)
                                    <i data-lucide="trash-2"></i>
                                @else
                                    <i data-lucide="rotate-cw"></i>
                                @endif
                            </button>
                        </form> -->
                </article>
                    <!-- @endisset -->
            </article>
        </section>

        <!-- @if (!$sejour->publie && (Helpers::AuthIsRole(Role::ServiceVente) || Helpers::AuthIsRole(Role::Dirigeant)))
            @if (\Session::has('success'))
                <p class="alert alert-success"><i data-lucide="circle-check-big"></i>{!! \Session::get('success') !!}</p>
            @endif
            <form action="{{ route('api.sejour-hotel', ['idsejour' => $sejour->idsejour]) }}" method="POST">
                @csrf
                <button type="submit" class="button">Contactez les hotels</button>
            </form>
        @endif -->

        <hr>
        <h2 class="titreg">Les châteaux et les domaines</h2>

        <section id="chateaux" v-for="etape in travel.etapes">
                <article class="unchateaux" v-for="visite in etape.idvisites">
                        <img class="imgchateaux" :src="'/src/assets/images/visite/'+visite.photovisite"></img>
                        <p class="descrchateaux">{{ visite.descriptionvisite }}</p>
                            <a class="lienchateaux link" href="https://www.vinotrip.com/fr/partenaires/25-domaine-trapet"
                                target="_blank">{{ visite.idpartenaireNavigation.nompartenaire }}</a>
                </article>
        </section>

        <!--
        @foreach ($sejour->avis as $avis)
            @php
                $cpt++;
            @endphp
        @endforeach
        @if ($cpt != 0) -->
        <div id="Avis">
                <h2 class="titre_info">Les Avis</h2>
                <div class="container_avis">
                    <div v-for="Avis in travel.avis" class="avis-item">
                        <div class="note">
                            <p class="etoiles">
                                <Star :class="{ checked: Avis.noteavis >= 1 }" />
                                <Star :class="{ checked: Avis.noteavis >= 2 }" />
                                <Star :class="{ checked: Avis.noteavis >= 3 }" />
                                <Star :class="{ checked: Avis.noteavis >= 4 }" />
                                <Star :class="{ checked: Avis.noteavis >= 5 }" />
                            </p>
                        </div>
                        <div class="exemple-avis">
                            <p class="titre-exemple">{{ Avis.titreavis }}</p>
                            <p class="description-exemple">{{ Avis.descriptionavis }}</p>
                        </div>
                    </div>
                </div>
            </div>
    </main>

</template>

<style>




</style>