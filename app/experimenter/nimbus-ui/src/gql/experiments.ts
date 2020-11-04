/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { gql } from "@apollo/client";

export const CREATE_EXPERIMENT_MUTATION = gql`
  mutation createExperiment($input: CreateExperimentInput!) {
    createExperiment(input: $input) {
      clientMutationId
      message
      status
      nimbusExperiment {
        name
        slug
        hypothesis
        application
      }
    }
  }
`;

export const UPDATE_EXPERIMENT_OVERVIEW_MUTATION = gql`
  mutation updateExperimentOverview($input: UpdateExperimentInput!) {
    updateExperimentOverview(input: $input) {
      clientMutationId
      message
      status
      nimbusExperiment {
        name
        hypothesis
        application
        publicDescription
      }
    }
  }
`;

export const GET_EXPERIMENT_QUERY = gql`
  query getExperiment($slug: String!) {
    experimentBySlug(slug: $slug) {
      id
      owner {
        email
      }
      name
      slug
      status

      hypothesis
      application
      publicDescription

      referenceBranch {
        name
        slug
        description
        ratio
        featureValue
        featureEnabled
      }
      treatmentBranches {
        name
        slug
        description
        ratio
        featureValue
        featureEnabled
      }

      featureConfig {
        slug
        name
        description
        application
        ownerEmail
        schema
      }

      primaryProbeSets {
        slug
        name
      }

      secondaryProbeSets {
        slug
        name
      }

      channels
      firefoxMinVersion
      targetingConfigSlug

      populationPercent
      totalEnrolledClients
      proposedEnrollment
      proposedDuration
    }
  }
`;