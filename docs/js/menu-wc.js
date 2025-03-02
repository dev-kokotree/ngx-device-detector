'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ngx-device-detector</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' : 'data-target="#xs-components-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' :
                                            'id="xs-components-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' : 'data-target="#xs-pipes-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' :
                                            'id="xs-pipes-links-module-AppModule-daa88ad5fe2c23827350b86d34f3f222aae47eca7d11c923f74cfee52e5e20a41f08f8c6e0dd349732028d6edc86e7881dff9e740f22e191b6c062544e2172da"' }>
                                            <li class="link">
                                                <a href="pipes/KeysPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeysPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppServerModule-c2b245cdbf079d3df947400c5c4bcaadff7a7098b93e4fb121e51ca0f058fa42efe908f7dceebc9e65588b0350e536012d64e5433f1ed0059ea40945c3a342ef"' : 'data-target="#xs-components-links-module-AppServerModule-c2b245cdbf079d3df947400c5c4bcaadff7a7098b93e4fb121e51ca0f058fa42efe908f7dceebc9e65588b0350e536012d64e5433f1ed0059ea40945c3a342ef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-c2b245cdbf079d3df947400c5c4bcaadff7a7098b93e4fb121e51ca0f058fa42efe908f7dceebc9e65588b0350e536012d64e5433f1ed0059ea40945c3a342ef"' :
                                            'id="xs-components-links-module-AppServerModule-c2b245cdbf079d3df947400c5c4bcaadff7a7098b93e4fb121e51ca0f058fa42efe908f7dceebc9e65588b0350e536012d64e5433f1ed0059ea40945c3a342ef"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReTree.html" data-type="entity-link" >ReTree</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DeviceDetectorService.html" data-type="entity-link" >DeviceDetectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UniversalDeviceDetectorService.html" data-type="entity-link" >UniversalDeviceDetectorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DeviceInfo.html" data-type="entity-link" >DeviceInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});