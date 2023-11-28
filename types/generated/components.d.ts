import type { Schema, Attribute } from '@strapi/strapi';

export interface CardsDefaultCard extends Schema.Component {
  collectionName: 'components_cards_default_cards';
  info: {
    displayName: 'defaultCard';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    description: Attribute.RichText;
    image: Attribute.Media;
    link: Attribute.String;
  };
}

export interface FieldsCalcResult extends Schema.Component {
  collectionName: 'components_fields_calc_results';
  info: {
    displayName: 'calc_result';
    description: '';
  };
  attributes: {
    place: Attribute.String;
    item: Attribute.Component<'fields.result-row', true>;
  };
}

export interface FieldsEmail extends Schema.Component {
  collectionName: 'components_fields_emails';
  info: {
    displayName: 'Email';
    description: '';
  };
  attributes: {
    value: Attribute.Email;
  };
}

export interface FieldsMediaImage extends Schema.Component {
  collectionName: 'components_fields_media_images';
  info: {
    displayName: 'MediaImage';
    description: '';
  };
  attributes: {
    logoImage: Attribute.Media;
  };
}

export interface FieldsPhone extends Schema.Component {
  collectionName: 'components_fields_phones';
  info: {
    displayName: 'phone';
    description: '';
  };
  attributes: {
    value: Attribute.String;
  };
}

export interface FieldsProperty extends Schema.Component {
  collectionName: 'components_fields_properties';
  info: {
    displayName: 'property';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    text: Attribute.String;
    value: Attribute.Decimal;
  };
}

export interface FieldsResultRow extends Schema.Component {
  collectionName: 'components_fields_result_rows';
  info: {
    displayName: 'result_row';
  };
  attributes: {
    product: Attribute.Relation<
      'fields.result-row',
      'oneToOne',
      'api::product.product'
    >;
    thickness: Attribute.String;
    quanity: Attribute.Integer;
  };
}

export interface FieldsTag extends Schema.Component {
  collectionName: 'components_fields_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    title: Attribute.String & Attribute.Required & Attribute.Unique;
    slug: Attribute.String &
      Attribute.CustomField<
        'plugin::slug.slug',
        {
          pattern: 'title';
        }
      >;
  };
}

export interface FieldsTechnology extends Schema.Component {
  collectionName: 'components_fields_technologies';
  info: {
    displayName: 'technology';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    order: Attribute.Integer & Attribute.DefaultTo<1>;
  };
}

export interface FieldsTitle extends Schema.Component {
  collectionName: 'components_elements_titles';
  info: {
    displayName: 'BaseFields';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    shortText: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    Text: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
    media: Attribute.Media;
  };
}

export interface FieldsVariant extends Schema.Component {
  collectionName: 'components_fields_variants';
  info: {
    displayName: 'variant';
    description: '';
  };
  attributes: {
    size: Attribute.String;
    thickness: Attribute.Decimal & Attribute.DefaultTo<0>;
    quanity_in_box: Attribute.Integer;
    sqrt: Attribute.Decimal;
    weight: Attribute.Decimal;
    specific_weight: Attribute.Decimal;
    kmp: Attribute.Decimal;
    adhesion: Attribute.Decimal;
    temp: Attribute.String;
    property: Attribute.Component<'fields.property', true>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    Logo: Attribute.Component<'fields.media-image'>;
  };
}

export interface LayoutSection extends Schema.Component {
  collectionName: 'components_layout_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    BaseFields: Attribute.Component<'fields.title'>;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    link_type: Attribute.Enumeration<
      ['link', 'outline', 'button-primary', 'darkOutline']
    > &
      Attribute.DefaultTo<'outline'>;
  };
}

export interface SharedMetaData extends Schema.Component {
  collectionName: 'components_shared_meta_data';
  info: {
    displayName: 'MetaData';
  };
  attributes: {
    PublishDate: Attribute.DateTime & Attribute.Required;
    Author: Attribute.Relation<
      'shared.meta-data',
      'oneToOne',
      'plugin::users-permissions.user'
    >;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String & Attribute.Required;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cards.default-card': CardsDefaultCard;
      'fields.calc-result': FieldsCalcResult;
      'fields.email': FieldsEmail;
      'fields.media-image': FieldsMediaImage;
      'fields.phone': FieldsPhone;
      'fields.property': FieldsProperty;
      'fields.result-row': FieldsResultRow;
      'fields.tag': FieldsTag;
      'fields.technology': FieldsTechnology;
      'fields.title': FieldsTitle;
      'fields.variant': FieldsVariant;
      'layout.footer': LayoutFooter;
      'layout.section': LayoutSection;
      'links.link': LinksLink;
      'shared.meta-data': SharedMetaData;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
