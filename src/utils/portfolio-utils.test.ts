import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatWhatsAppUrl,
  getInitials,
  validateContactSubmission,
  filterProjectsList
} from './portfolio-utils.ts';

test('formatWhatsAppUrl cleans non-digits and constructs valid wa.me link', () => {
  const url1 = formatWhatsAppUrl('+91 93464 85073');
  assert.equal(url1, 'https://wa.me/919346485073');

  const urlWith10Digits = formatWhatsAppUrl('9346485073');
  assert.equal(urlWith10Digits, 'https://wa.me/919346485073');

  const urlWithMessage = formatWhatsAppUrl('+91 94904 95925', 'Hello Arshadd!');
  assert.equal(urlWithMessage, 'https://wa.me/919490495925?text=Hello%20Arshadd!');
});

test('getInitials extracts two letters accurately', () => {
  assert.equal(getInitials('MUDIVEDU ARSHADD'), 'MA');
  assert.equal(getInitials('Mudivedu Arshadd'), 'MA');
  assert.equal(getInitials('Arshadd'), 'AR');
  assert.equal(getInitials(''), 'MA');
});

test('validateContactSubmission validates required fields and honeypot', () => {
  // Valid submission
  const valid = validateContactSubmission({
    name: 'K. Rajesh Naidu',
    email: 'rajesh@example.com',
    phone: '+91 9876543210',
    message: 'Need a custom full-stack e-commerce website for my business.'
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);

  // Invalid email and empty message
  const invalid = validateContactSubmission({
    name: 'R',
    email: 'not-an-email',
    message: 'hi'
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.message);

  // Honeypot trap
  const spam = validateContactSubmission({
    name: 'Spam Bot',
    email: 'bot@spam.com',
    message: 'We sell backlinks to your portfolio!',
    honeypot: 'filled_by_bot'
  });
  assert.equal(spam.isValid, false);
  assert.equal(spam.errors.honeypot, 'Spam bot detected');
});

test('filterProjectsList accurately filters by category', () => {
  const sample = [
    { title: 'Proj 1', categories: ['All', 'Websites'] },
    { title: 'Proj 2', categories: ['All', 'Mobile Apps'] },
    { title: 'Proj 3', categories: ['All', 'Websites', 'Full-Stack'] }
  ];

  assert.equal(filterProjectsList(sample, 'All').length, 3);
  assert.equal(filterProjectsList(sample, 'Websites').length, 2);
  assert.equal(filterProjectsList(sample, 'Mobile Apps').length, 1);
  assert.equal(filterProjectsList(sample, 'UI/UX Design').length, 0);
});
