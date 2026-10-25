import React from 'react';
import { contactInfo, projectsData } from '../data/portfolioData';

export default function ConfigNotice() {
  const hasPlaceholders =
    contactInfo.emailPlaceholder ||
    contactInfo.linkedinPlaceholder ||
    contactInfo.githubPlaceholder ||
    contactInfo.leetcodePlaceholder ||
    projectsData.some((p) => p.githubPlaceholder);

  if (!hasPlaceholders) return null;

  return null;
}
