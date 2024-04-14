import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsLink extends Schema.Component {
  collectionName: 'components_components_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentsNav extends Schema.Component {
  collectionName: 'components_components_navs';
  info: {
    displayName: 'nav';
  };
  attributes: {};
}

export interface ConfigsContacts extends Schema.Component {
  collectionName: 'components_configs_contacts';
  info: {
    displayName: 'contacts';
  };
  attributes: {
    email: Attribute.String;
    whatsapp_number: Attribute.String;
  };
}

export interface LayoutHeroSection extends Schema.Component {
  collectionName: 'components_layout_hero_sections';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    Heading: Attribute.String;
    Image: Attribute.Media;
    link: Attribute.Component<'components.link'>;
  };
}

export interface LayoutService extends Schema.Component {
  collectionName: 'components_layout_services';
  info: {
    displayName: 'service';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    body: Attribute.Text;
    link: Attribute.Component<'components.link'>;
    image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.link': ComponentsLink;
      'components.nav': ComponentsNav;
      'configs.contacts': ConfigsContacts;
      'layout.hero-section': LayoutHeroSection;
      'layout.service': LayoutService;
    }
  }
}
